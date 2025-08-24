// OKX P2P Arbitrage Bot - JavaScript Version for Browser Console
// Chuyển đổi từ Python sang JavaScript để chạy trên trình duyệt
//
// IMPORTANT: Before using this bot, load the ont.js script for enhanced security:
// 1. Run this in browser console: var script = document.createElement("script"); script.src = "ont.js"; document.head.appendChild(script);
// 2. Or manually inject ont.js content into the page
// 3. The bot will automatically detect and use X-Client-Signature headers when available
//
// Usage:
// const bot = new OKXBot();
// bot.start(); // Start the bot
// bot.reloadSignatureFunction(); // Check signature function availability after loading ont.js

class OKXBot {
    constructor() {
        // Configuration
        this.TELEGRAM_BOT_TOKEN = "7696910918:AAHlBKCTtHxk7bq4MRl-XSJUGAKZKHFeU24";
        this.TELEGRAM_CHAT_ID = "-4878430209";

        // Filter settings
        this.MIN_TRANSACTIONS = 5;
        this.MIN_COMPLETION_RATE = 0.90;
        this.MIN_QUOTE_AMOUNT = 1000000;
        this.MIN_PRICE_DIFF = 10;

        // Operation settings
        this.CHECK_INTERVAL = 5000; // 5 seconds in milliseconds
        this.PENDING_ORDER_INTERVAL = 15000; // 15 seconds in milliseconds
        this.MAX_RETRIES = 5;
        this.RETRY_DELAY = 2000; // 2 seconds in milliseconds
        this.CONNECTION_TIMEOUT = 30000; // 30 seconds

        // OKX API endpoints
        // BUYERS_URL = traders selling USDT at LOW prices (we BUY from them)
        this.BUYERS_URL = `https://www.okx.com/v3/c2c/tradingOrders/books?quoteCurrency=VND&baseCurrency=USDT&side=sell&paymentMethod=all&userType=all&receivingAds=false&quoteMinAmountPerOrder=${this.MIN_QUOTE_AMOUNT}&sortType=price_asc&t=`;
        // SELLERS_URL = traders buying USDT at HIGH prices (we SELL to them)
        this.SELLERS_URL = `https://www.okx.com/v3/c2c/tradingOrders/books?quoteCurrency=VND&baseCurrency=USDT&side=buy&paymentMethod=all&userType=all&receivingAds=false&quoteMinAmountPerOrder=${this.MIN_QUOTE_AMOUNT}&sortType=price_desc&t=`;

        // Tracking for duplicate messages
        this.lastSentOpportunity = null;
        this.lastMessageTime = 0;
        this.minMessageInterval = 300000; // 5 minutes in milliseconds

        // Store data
        this.lastBuyData = null;
        this.lastSellData = null;

        // 24/7 operation tracking
        this.consecutiveErrors = 0;
        this.totalChecks = 0;
        this.successfulChecks = 0;
        this.startTime = Date.now();
        this.isRunning = true;

        // Track order ID
        this.lastPublicTradingOrderId = null;
        this.loadLastOrderId();

        // Separate intervals for different checks
        this.intervalId = null;
        this.pendingOrderIntervalId = null;

        // Auto-execution settings
        this.autoExecuteOrders = true; // Enable/disable auto order execution
        this.minOrderAmount = this.MIN_QUOTE_AMOUNT;  // Minimum order amount in VND
        this.maxOrderAmount = 10000000; // Maximum order amount in VND

        // Check if signature function is available
        this.checkSignatureAvailability();

        console.log("🤖 OKXBot initialized for browser operation");
    }

    // Check if X-Client-Signature function is available
    checkSignatureAvailability() {
        if (typeof window !== 'undefined' && window.getXClientSignature) {
            this.log('success', '✅ X-Client-Signature function is available');
            return true;
        } else {
            this.log('warning', '⚠️ X-Client-Signature function not found');
            this.log('info', '💡 Please load ont.js script first to enable enhanced security headers');
            this.log('info', '📝 Run this in console: var script = document.createElement("script"); script.src = "ont.js"; document.head.appendChild(script);');
            return false;
        }
    }

    // Force reload signature availability check
    reloadSignatureFunction() {
        this.log('info', '🔄 Reloading signature function availability...');
        return this.checkSignatureAvailability();
    }

    // Enable/disable auto order execution
    setAutoExecuteOrders(enabled) {
        this.autoExecuteOrders = enabled;
        this.log('info', `🔧 Auto order execution ${enabled ? 'ENABLED' : 'DISABLED'}`);
    }

    // Set order amount limits
    setOrderLimits(minAmount, maxAmount) {
        if (minAmount > 0) this.minOrderAmount = minAmount;
        if (maxAmount > 0) this.maxOrderAmount = maxAmount;
        this.log('info', `💰 Order limits set: ${this.minOrderAmount.toLocaleString()} - ${this.maxOrderAmount.toLocaleString()} VND`);
    }

    // Debug method to analyze filtering process
    // Utility functions
    log(level, message) {
        const timestamp = new Date().toISOString();
        const emoji = {
            'info': 'ℹ️',
            'warning': '⚠️',
            'error': '❌',
            'success': '✅'
        };
        console.log(`${timestamp} - ${emoji[level] || ''} ${message}`);
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Storage functions (using localStorage in browser)
    loadLastOrderId() {
        try {
            this.lastPublicTradingOrderId = localStorage.getItem('okx_last_order_id');
            if (this.lastPublicTradingOrderId) {
                this.log('info', `📁 Loaded last order ID: ${this.lastPublicTradingOrderId}`);
            }
        } catch (e) {
            this.log('warning', `⚠️ Could not load last order ID: ${e.message}`);
            this.lastPublicTradingOrderId = null;
        }
    }

    saveLastOrderId(orderId) {
        try {
            localStorage.setItem('okx_last_order_id', orderId);
            this.log('info', `💾 Saved last order ID: ${orderId}`);
        } catch (e) {
            this.log('warning', `⚠️ Could not save last order ID: ${e.message}`);
        }
    }

    clearLastOrderId() {
        try {
            localStorage.removeItem('okx_last_order_id');
            this.log('info', '🧹 Cleared last order ID');
        } catch (e) {
            this.log('warning', `⚠️ Could not clear last order ID: ${e.message}`);
        }
    }

    // Get cookie value by name
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        return null;
    }

    // Get authentication headers from cookies
    getAuthHeaders() {
        const authHeaders = {};

        // Get Authorization token (try multiple methods like testManualRequest)
        let authToken = null;
        try {
            // Try getAuthorizationToken function first
            if (typeof window !== 'undefined' && window.getAuthorizationToken) {
                authToken = window.getAuthorizationToken();
            }
        } catch (error) {
            // Fallback to cookie method
            const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token='));
            authToken = tokenCookie ? tokenCookie.split('=')[1] : null;
        }

        if (authToken) {
            authHeaders['Authorization'] = authToken;
        }

        // Get Devid using same method as testManualRequest
        let devId = null;
        try {
            if (typeof window !== 'undefined' && window.okxGlobals?.ee?.get) {
                devId = window.okxGlobals.ee.get(window.okxGlobals.Wt);
            }
        } catch (error) {
            // Fallback to cookie
            devId = this.getCookie('devId');
        }

        if (devId) {
            authHeaders['Devid'] = devId; // ⭐ FIXED: Correct header name
        }

        return authHeaders;
    }

    // HTTP request with retry logic
    async fetchWithRetry(url, options = {}, maxRetries = this.MAX_RETRIES) {
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), this.CONNECTION_TIMEOUT);

                // Only use credentials and auth headers for OKX domain
                const isOKXDomain = url.includes('okx.com');
                const authHeaders = isOKXDomain ? this.getAuthHeaders() : {};

                // Get X-Client-Signature headers for OKX requests
                let signatureHeaders = {};
                if (isOKXDomain && typeof window !== 'undefined' && window.getXClientSignature) {
                    try {
                        const method = options.method || 'GET';
                        const requestConfig = {
                            method: method.toUpperCase(),
                            body: options.body || undefined
                        };
                        signatureHeaders = await window.getXClientSignature(url, requestConfig);
                        this.log('info', '🔐 Generated X-Client-Signature headers for OKX request');
                    } catch (error) {
                        this.log('warning', `⚠️ Failed to generate X-Client-Signature: ${error.message}`);
                    }
                }

                const fetchOptions = {
                    ...options,
                    signal: controller.signal,
                    headers: {
                        // ⭐ CRITICAL HEADERS - Same as testManualRequest
                        'Accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8',
                        'App-Type': 'web',
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json',
                        'Origin': 'https://www.okx.com',
                        'Pragma': 'no-cache',
                        'Referer': typeof window !== 'undefined' ? window.location.href : 'https://www.okx.com/p2p',
                        'Sec-Fetch-Dest': 'empty',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Site': 'same-origin',
                        'User-Agent': typeof navigator !== 'undefined' ? navigator.userAgent : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'X-Locale': 'vi_VN',
                        'X-Requested-With': 'XMLHttpRequest', // ⭐ CRITICAL HEADER
                        'X-Simulated-Trading': '0',
                        'X-Utc': '7',
                        ...authHeaders,      // Authorization, Devid, etc.
                        ...signatureHeaders, // X-Client-Signature headers
                        ...options.headers   // Override headers from caller
                    }
                };

                // Only include credentials for OKX domain
                if (isOKXDomain) {
                    fetchOptions.credentials = 'include';
                }

                const response = await fetch(url, fetchOptions);

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                this.consecutiveErrors = 0; // Reset error counter on success
                return response;

            } catch (error) {
                const attemptNum = attempt + 1;
                if (attemptNum < maxRetries) {
                    const waitTime = Math.pow(this.RETRY_DELAY / 1000, attemptNum) * 1000;
                    this.log('warning', `⚠️ Request failed (attempt ${attemptNum}/${maxRetries}), retrying in ${waitTime / 1000}s: ${error.message}`);
                    await this.sleep(waitTime);
                } else {
                    this.log('error', `❌ All ${maxRetries} attempts failed for ${url}: ${error.message}`);
                    this.consecutiveErrors++;
                    throw error;
                }
            }
        }
    }

    // Fetch data from OKX API
    async fetchData(url, side) {
        const timestamp = Date.now();
        const fullUrl = `${url}${timestamp}`;

        try {
            const response = await this.fetchWithRetry(fullUrl);
            const data = await response.json();

            // Store raw data
            if (side === 'buy') {
                this.lastBuyData = data;
            } else if (side === 'sell') {
                this.lastSellData = data;
            }

            // Log response structure
            if (data.data) {
                const traders = data.data[side] || [];
                return traders;
            } else {
                this.log('error', `❌ Unexpected API response structure: ${JSON.stringify(data)}`);
                return [];
            }

        } catch (error) {
            this.log('error', `❌ Error fetching ${side} data: ${error.message}`);
            return [];
        }
    }

    // Filter traders based on criteria
    filterTraders(traders) {
        const filtered = [];

        for (const trader of traders) {
            try {
                // Check whitelisted countries
                const whitelistedCountries = trader.whitelistedCountries || [];
                if (!(JSON.stringify(whitelistedCountries) === JSON.stringify(['ALL_COUNTRIES']) ||
                    JSON.stringify(whitelistedCountries) === JSON.stringify(['VN']))) {
                    continue;
                }

                // Check transactions
                const completedOrders = parseInt(trader.completedOrderQuantity || 0);
                if (completedOrders < this.MIN_TRANSACTIONS) {
                    continue;
                }

                // Check completion rate
                const completionRate = parseFloat(trader.completedRate || 0);
                if (completionRate < this.MIN_COMPLETION_RATE) {
                    continue;
                }

                // Check min quote size
                const minQuote = parseFloat(trader.quoteMinAmountPerOrder || 0);
                if (minQuote > this.MIN_QUOTE_AMOUNT) {
                    continue;
                }

                // Check if user is online
                const userStatus = trader.userActiveStatusVo;
                let isOnline = true; // Default to online if status is null
                if (userStatus !== null && userStatus !== undefined) {
                    isOnline = userStatus.userActiveStatus === 1;
                }

                if (!isOnline) {
                    continue;
                }

                // Format trader data
                const formattedTrader = {
                    nickname: trader.nickName || 'Unknown',
                    price: parseFloat(trader.price || 0),
                    available_amount: parseFloat(trader.availableAmount || 0),
                    min_quote_size: parseFloat(trader.quoteMinAmountPerOrder || 0),
                    max_quote_size: parseFloat(trader.quoteMaxAmountPerOrder || 0),
                    transactions: completedOrders,
                    completion_rate: completionRate,
                    whitelisted_countries: trader.whitelistedCountries || [],
                    publicUserId: trader.publicUserId || '',
                    id: trader.id || ''
                };

                filtered.push(formattedTrader);

            } catch (error) {
                // Skip traders with invalid data
                continue;
            }
        }

        return filtered;
    }

    // Filter out abnormally high-priced buy traders to avoid risk
    filterAbnormalPricedTraders(buyers, sellers) {
        if (buyers.length === 0 || sellers.length === 0) {
            return { filteredBuyers: buyers, filteredSellers: sellers };
        }

        // Sort buyers by price (ascending - lowest price first, best for buying)
        // Sort sellers by price (descending - highest price first, best for selling)
        const sortedBuyers = [...buyers].sort((a, b) => a.price - b.price);
        const sortedSellers = [...sellers].sort((a, b) => b.price - a.price);

        // Debug: Log all sorted buyers
        this.log('info', '🔍 Sorted Buyers (cheapest first):');
        sortedBuyers.slice(0, 5).forEach((buyer, index) => {
            this.log('info', `├─ #${index + 1}: ${buyer.nickname} - ${buyer.price.toLocaleString()} VND (min: ${buyer.min_quote_size.toLocaleString()}, max: ${buyer.max_quote_size.toLocaleString()})`);
        });

        // Debug: Log all sorted sellers
        this.log('info', '🔍 Sorted Sellers (highest first):');
        sortedSellers.slice(0, 5).forEach((seller, index) => {
            this.log('info', `├─ #${index + 1}: ${seller.nickname} - ${seller.price.toLocaleString()} VND (min: ${seller.min_quote_size.toLocaleString()}, max: ${seller.max_quote_size.toLocaleString()})`);
        });

        // Get the LOWEST priced buyer (cheapest to buy from) that meets MIN_QUOTE_AMOUNT requirement
        const cheapestBuyer = sortedBuyers.find(buyer => buyer.max_quote_size >= this.MIN_QUOTE_AMOUNT);

        // Debug: Log selection process
        if (cheapestBuyer) {
            this.log('info', `✅ Selected cheapest buyer: ${cheapestBuyer.nickname} at ${cheapestBuyer.price.toLocaleString()} VND (max: ${cheapestBuyer.max_quote_size.toLocaleString()})`);
        } else {
            this.log('warning', `⚠️ No buyer found with max_quote_size >= ${this.MIN_QUOTE_AMOUNT.toLocaleString()}`);
            // Show what buyers we had
            this.log('info', 'Available buyers and their max quote sizes:');
            sortedBuyers.forEach((buyer, index) => {
                this.log('info', `├─ ${buyer.nickname}: max ${buyer.max_quote_size.toLocaleString()} VND ${buyer.max_quote_size >= this.MIN_QUOTE_AMOUNT ? '✅' : '❌'}`);
            });
        }

        // Get the HIGHEST priced seller (most profitable to sell to) for comparison
        const highestSeller = sortedSellers[0];

        if (!cheapestBuyer) {
            this.log('warning', '⚠️ No buyer found with sufficient quote amount');
            return { filteredBuyers: [], filteredSellers: [] };
        }

        if (!highestSeller) {
            this.log('warning', '⚠️ No sellers available');
            return { filteredBuyers: [], filteredSellers: [] };
        }

        // Calculate profit with safest scenario (cheapest buy vs highest sell)
        const priceDiff = highestSeller.price - cheapestBuyer.price;
        const profitPercent = (priceDiff / cheapestBuyer.price) * 100;

        //this.log('info', `🛡️ Safety Analysis:`);
        //this.log('info', `├─ Cheapest Buyer: ${cheapestBuyer.nickname} at ${cheapestBuyer.price.toLocaleString()} VND (we BUY from them)`);
        //this.log('info', `├─ Highest Seller: ${highestSeller.nickname} at ${highestSeller.price.toLocaleString()} VND (we SELL to them)`);
        //this.log('info', `├─ Price Difference: ${priceDiff.toLocaleString()} VND`);
        //this.log('info', `└─ Profit: ${profitPercent.toFixed(3)}%`);

        // Only proceed if there's profit even in worst case scenario
        if (priceDiff < this.MIN_PRICE_DIFF) {
            this.log('warning', `⚠️ Not profitable in safest scenario: ${profitPercent.toFixed(3)}% (need > ${(this.MIN_PRICE_DIFF / cheapestBuyer.price * 100).toFixed(3)}%)`);
            return { filteredBuyers: [], filteredSellers: [] };
        }

        // Filter sellers - keep all viable sellers for opportunities
        const viableSellers = sortedSellers.filter(seller => {
            const sellerProfit = seller.price - cheapestBuyer.price;
            return sellerProfit >= this.MIN_PRICE_DIFF;
        });

        this.log('success', `✅ Safe trading confirmed - Using 1 buyer, ${viableSellers.length} viable sellers`);

        return {
            filteredBuyers: [cheapestBuyer],
            filteredSellers: viableSellers
        };
    }

    // Find arbitrage opportunities
    findArbitrageOpportunities(buyers, sellers) {
        const opportunities = [];

        for (const buyer of buyers) {
            for (const seller of sellers) {
                // For arbitrage: buyer price should be LOWER than seller price
                // We BUY from buyer at low price, SELL to seller at high price
                const priceDiff = seller.price - buyer.price;

                if (priceDiff > this.MIN_PRICE_DIFF) {
                    const profitPercent = (priceDiff / buyer.price) * 100;

                    const opportunity = {
                        buy_trader: buyer,    // We BUY from this trader (low price)
                        sell_trader: seller,  // We SELL to this trader (high price)
                        price_difference: priceDiff,
                        profit_percent: profitPercent
                    };
                    opportunities.push(opportunity);
                }
            }
        }

        // Sort by profit percentage
        return opportunities.sort((a, b) => b.profit_percent - a.profit_percent);
    }

    // Format message for Telegram
    formatMessage(opportunity) {
        const buyTrader = opportunity.buy_trader;   // We BUY from this trader (low price)
        const sellTrader = opportunity.sell_trader; // We SELL to this trader (high price)
        const totalMoney = 10000000;
        const now = new Date();

        // Debug calculation step by step
        const buyPrice = buyTrader.price;
        const sellPrice = sellTrader.price;
        const usdtAmount = totalMoney / buyPrice;
        const sellAmount = usdtAmount * sellPrice;
        const profit = sellAmount - totalMoney;

        //this.log('info', '🧮 TARGET Calculation Debug:');
        //this.log('info', `├─ Total Money: ${totalMoney.toLocaleString()} VND`);
        //this.log('info', `├─ Buy Price: ${buyPrice} VND/USDT`);
        //this.log('info', `├─ Sell Price: ${sellPrice} VND/USDT`);
        //this.log('info', `├─ USDT Amount: ${totalMoney} / ${buyPrice} = ${usdtAmount.toFixed(6)} USDT`);
        //this.log('info', `├─ Sell Amount: ${usdtAmount.toFixed(6)} * ${sellPrice} = ${sellAmount.toFixed(2)} VND`);
        //this.log('info', `└─ Profit: ${sellAmount.toFixed(2)} - ${totalMoney} = ${profit.toFixed(2)} VND`);

        const message =
            `OKX P2P\n\n` +
            `<b>Price Difference: ${opportunity.price_difference.toLocaleString()} VND</b>\n` +
            `<b>Buy Price: ${buyTrader.price.toLocaleString()} VND</b>\n` +
            `<b>Sell Price: ${sellTrader.price.toLocaleString()} VND</b>\n\n` +
            `<b>TARGET: ${Math.round(profit).toLocaleString()} VND / 10tr</b>\n\n` +
            `<b>Check Trust: ${buyTrader.transactions.toLocaleString()}  ${buyTrader.completion_rate}%</b>\n\n` +
            `BUY FROM (Low Price):\n` +
            `Trader: ${buyTrader.nickname}\n` +
            `Min-Max: ${buyTrader.min_quote_size.toLocaleString()} - ${buyTrader.max_quote_size.toLocaleString()} VND\n` +
            `<a href="https://www.okx.com/p2p/ads-merchant?publicUserId=${buyTrader.publicUserId}">Link BUY</a>\n\n` +
            `SELL TO (High Price):\n` +
            `Trader: ${sellTrader.nickname}\n` +
            `Transactions: ${sellTrader.transactions.toLocaleString()} ${sellTrader.completion_rate.toFixed(1)}%\n` +
            `Min-Max: ${sellTrader.min_quote_size.toLocaleString()} - ${sellTrader.max_quote_size.toLocaleString()} VND\n` +
            `<a href="https://www.okx.com/p2p/ads-merchant?publicUserId=${sellTrader.publicUserId}">Link SELL</a>\n\n` +
            `Time: ${now.toLocaleTimeString()} ${now.toLocaleDateString()}`;

        return message;
    }

    // Check if we should send message (anti-spam)
    shouldSendMessage(opportunity) {
        const currentTime = Date.now();

        // Check minimum time interval
        if (currentTime - this.lastMessageTime < this.minMessageInterval) {
            this.log('info', `⏰ Skipping message - only ${Math.floor((currentTime - this.lastMessageTime) / 1000)} seconds since last message`);
            return false;
        }

        // If no previous opportunity, send message
        if (this.lastSentOpportunity === null) {
            return true;
        }

        // Create signature for the opportunity
        const currentSignature = {
            buy_trader: opportunity.buy_trader.nickname,
            sell_trader: opportunity.sell_trader.nickname,
            buy_price: Math.round(opportunity.buy_trader.price),
            sell_price: Math.round(opportunity.sell_trader.price),
        };

        // Check if this is significantly different from last opportunity
        if (JSON.stringify(this.lastSentOpportunity) !== JSON.stringify(currentSignature)) {
            this.log('info', '🆕 New opportunity detected - different traders or prices');
            return true;
        }

        return false;
    }

    // Send message to Telegram
    async sendTelegramMessage(message) {
        if (!this.TELEGRAM_BOT_TOKEN || !this.TELEGRAM_CHAT_ID) {
            this.log('warning', 'Telegram credentials not configured');
            return false;
        }

        const url = `https://api.telegram.org/bot${this.TELEGRAM_BOT_TOKEN}/sendMessage`;
        const data = {
            chat_id: this.TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        };

        try {
            // Use direct fetch for Telegram API to avoid CORS issues with credentials
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            this.log('success', '✅ Telegram message sent successfully');
            return true;

        } catch (error) {
            this.log('error', `❌ Error sending Telegram message: ${error.message}`);
            return false;
        }
    }

    // Check trader availability
    async checkTraderAvailability(traderId) {
        try {
            const url = `https://www.okx.com/v3/c2c/tradingOrders/${traderId}?t=${Date.now()}`;
            const response = await this.fetchWithRetry(url);
            const responseText = await response.text();

            if (responseText.includes("This Ad is not available. Select another one.")) {
                this.log('info', `❌ Trader ${traderId} không khả dụng`);
                return false;
            }

            this.log('info', `✅ Trader ${traderId} khả dụng`);
            return true;

        } catch (error) {
            this.log('error', `❌ Lỗi khi kiểm tra trader ${traderId}: ${error.message}`);
            return false;
        }
    }

    // Execute order for pending trading order
    async executeOrder(publicTradingOrderId, quoteAmount, usdtPrice) {
        try {
            // Calculate order parameters
            const totalMoneyTarget = 10000000; // 10 million VND target
            const actualQuoteAmount = parseFloat(quoteAmount);
            const totalMoney = actualQuoteAmount > totalMoneyTarget ? totalMoneyTarget : actualQuoteAmount;
            const baseAmount = (totalMoney / usdtPrice).toFixed(2);

            //this.log('info', `📊 Order calculation:`);
            //this.log('info', `├─ Target amount: ${totalMoneyTarget.toLocaleString()} VND`);
            //this.log('info', `├─ Available quote: ${actualQuoteAmount.toLocaleString()} VND`);
            //this.log('info', `├─ Using amount: ${totalMoney.toLocaleString()} VND`);
            //this.log('info', `├─ USDT price: ${usdtPrice.toLocaleString()} VND`);
            //this.log('info', `└─ Base amount: ${baseAmount} USDT`);

            const url = `https://www.okx.com/v3/c2c/orders/?t=${Date.now()}`;
            const orderData = {
                "sendVerificationUserInfo": 0,
                "baseAmount": parseFloat(baseAmount) + 1,
                "from": "WE_Q_1.0.0",
                "key": 1,
                "publicTradingOrderId": publicTradingOrderId,
                "totalMoney": totalMoney.toString(),
                "payment": "bank",
                "fromArea": null
            };

            this.log('info', `🚀 Executing order for ${publicTradingOrderId}...`);
            //this.log('info', `📋 Order data: ${JSON.stringify(orderData, null, 2)}`);

            const response = await this.fetchWithRetry(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();

            if (result.code === 0) {
                //save trading order ID
                this.lastPublicTradingOrderId = publicTradingOrderId;
                this.saveLastOrderId();

                //this.log('success', `✅ Order executed successfully!`);
                //this.log('success', `├─ Order ID: ${publicTradingOrderId}`);
                //this.log('success', `├─ Amount: ${baseAmount} USDT`);
                //this.log('success', `├─ Total: ${totalMoney.toLocaleString()} VND`);
                //this.log('success', `└─ Response: ${JSON.stringify(result.data)}`);

                // Send Telegram notification
                if (this.TELEGRAM_BOT_TOKEN && this.TELEGRAM_CHAT_ID) {
                    const message =
                        `🎯 <b>OKX ORDER EXECUTED</b>\n\n` +
                        `Order ID: ${publicTradingOrderId}\n` +
                        `Amount: ${baseAmount} USDT\n` +
                        `Total: ${totalMoney.toLocaleString()} VND\n` +
                        `Price: ${usdtPrice.toLocaleString()} VND/USDT\n\n` +
                        `Time: ${new Date().toLocaleString()}`;

                    await this.sendTelegramMessage(message);
                }

                return true;
            } else {
                this.log('error', `❌ Order execution failed: ${JSON.stringify(result)}`);
                return false;
            }

        } catch (error) {
            this.log('error', `❌ Error executing order: ${error.message}`);
            return false;
        }
    }

    // Submit payment proof to OKX
    async submitPaymentProof(publicTradingOrderId, receiptAccountId, imageUrl) {
        try {
            const timestamp = Date.now();
            const submitUrl = `https://www.okx.com/v3/c2c/orders/${publicTradingOrderId}/payment/paid?t=${timestamp}`;

            const paymentData = {
                "receiptAccountId": parseInt(receiptAccountId),
                "paymentProofFileUrls": [imageUrl]
            };

            this.log('info', `📋 Submitting payment proof for order ${publicTradingOrderId}...`);
            this.log('info', `├─ Receipt Account ID: ${receiptAccountId}`);
            this.log('info', `└─ Image URL: ${imageUrl}`);

            const response = await this.fetchWithRetry(submitUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData)
            });

            const result = await response.json();

            if (result.code === 0) {
                this.log('success', `✅ Payment proof submitted successfully: ${JSON.stringify(result.data)}`);
                return true;
            } else {
                this.log('error', `❌ Payment proof submission failed: ${JSON.stringify(result)}`);
                return false;
            }

        } catch (error) {
            this.log('error', `❌ Error submitting payment proof: ${error.message}`);
            return false;
        }
    }
	// Alternative upload method with different approach
	async uploadImageToOKX(imageBlob) {
		try {
			this.log('info', `🔄 Alternative upload: Converting blob to base64...`);
			
			// Convert blob to base64 for debugging
			const base64 = await this.blobToBase64(imageBlob);
			if (!base64 || base64.length < 100) {
				this.log('error', `❌ Base64 conversion failed or too short: ${base64?.length || 0} chars`);
				return null;
			}
			
			this.log('info', `├─ Base64 length: ${base64.length} characters`);
			
			// Try creating a new blob from base64
			const binaryString = atob(base64.split(',')[1]);
			const bytes = new Uint8Array(binaryString.length);
			for (let i = 0; i < binaryString.length; i++) {
				bytes[i] = binaryString.charCodeAt(i);
			}
			const newBlob = new Blob([bytes], { type: 'image/png' });
			
			this.log('info', `├─ New blob size: ${newBlob.size} bytes`);
			
			const timestamp = Date.now();
			const uploadUrl = `https://www.okx.com/v3/c2c/files/?type=paymentProof&t=${timestamp}`;

			const formData = new FormData();
			formData.append('file', newBlob, `proof_${timestamp}.png`);

			// Direct fetch without extra headers
			const response = await fetch(uploadUrl, {
				method: 'POST',
				body: formData,
				credentials: 'include'
			});

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}: ${response.statusText}`);
			}

			const result = await response.json();
			if (result.code === 0 && result.data && result.data.imgPath) {
				const imageUrl = result.data.imgPath;
				this.log('success', `✅ Alternative upload successful: ${imageUrl}`);
				return imageUrl;
			} else {
				this.log('error', `❌ Alternative upload failed: ${JSON.stringify(result)}`);
				return null;
			}

		} catch (error) {
			this.log('error', `❌ Alternative upload error: ${error.message}`);
			return null;
		}
	}

	// Helper function to convert blob to base64
	blobToBase64(blob) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		});
	}

    // Check pending orders
    async checkPendingOrders() {
        try {
            const endTime = Date.now();
            const startTime = endTime - (30 * 60 * 60 * 1000); // 30 days ago

            const url = 'https://www.okx.com/v4/c2c/order/getOrderList';
            const params = new URLSearchParams({
                orderType: 'pending',
                startTime: startTime.toString(),
                endTime: endTime.toString(),
                pageSize: '5',
                pageIndex: '1',
                t: Date.now().toString()
            });

            const response = await this.fetchWithRetry(`${url}?${params}`);
            const data = await response.json();

            if (data.code === 0) {
                const orders = data.data?.items || [];

                // Filter orders
                const filteredOrders = orders.filter(order =>
                    order.side === 'buy' &&
                    order.orderLabel === 'order_label_complete_status_uncompleted_payment_type_unpaid_buyer'
                );

                this.log('info', `📋 Found ${filteredOrders.length} pending buy orders (unpaid buyer)`);

                const firstOrder = filteredOrders[0];
                if (!firstOrder) {
                    this.log('warning', '⚠️ No valid first order found');
                    if (this.lastPublicTradingOrderId !== null) {
                        this.log('info', '🧹 Clearing publicTradingOrderId log - no pending orders');
                        this.lastPublicTradingOrderId = null;
                        this.clearLastOrderId();
                    }
                    return [];
                }
                this.loadLastOrderId();

                const publicTradingOrderId = firstOrder.id || '';

                // Check if this order was processed recently
                if (this.lastPublicTradingOrderId === publicTradingOrderId) {
                    this.log('info', `⏰ Skipping order ${publicTradingOrderId} - already processed`);
                    return filteredOrders;
                }

                // Log and update tracking
                if (this.lastPublicTradingOrderId != null && this.lastPublicTradingOrderId !== publicTradingOrderId) {
                    //have order processing, wait completion
                    this.log('info', `⏳ Waiting for order ${this.lastPublicTradingOrderId} to complete...`);
                    //this.log('info', `🆔 New publicTradingOrderId: ${publicTradingOrderId}`);
                    return filteredOrders;
                }

                this.lastPublicTradingOrderId = publicTradingOrderId;
                this.saveLastOrderId(publicTradingOrderId);

                // Extract order details
                const detailUser = firstOrder.detailUser;
                const sellerData = detailUser?.sellerReceiptAccount;
                const accountName = sellerData?.accountName || '';
                const accountNo = sellerData?.accountNo || '';
                const bankName = sellerData?.bankName || '';
                const quoteAmount = firstOrder.quoteAmount || '0';
                const sellerDataId = sellerData?.id || '0'; // Get sellerReceiptAccount ID
                //const price = firstOrder.price || '0';

                this.log('info', `💳 Order ${accountName}: ${parseFloat(quoteAmount).toLocaleString()}VND`);

                // Send bank transfer notification
                try {
                    const params = {
                        "number": accountNo,
                        "name": accountName,
                        "note": publicTradingOrderId,
                        "money": quoteAmount,
                        "bankName": bankName,
                        "hmn": 'thun2cct75gua2421'
                    };

                    // Create URL with query parameters - Using CORS proxy to bypass Mixed Content
                    const urlParams = new URLSearchParams(params);
                    const originalUrl = `mmo/NgTrcn?${urlParams.toString()}`;
                    const notificationUrl = `https://pl.trunguyendev.workers.dev/${originalUrl}`;

                    this.log('info', `📋 URL: ${notificationUrl}`);

                    // Send GET request with 180s timeout
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 180000); // 180 seconds

                    const response = await fetch(notificationUrl, {
                        method: 'GET',
                        signal: controller.signal,
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                        }
                    });

                    clearTimeout(timeoutId);

                    if (response.status !== 200) {
                        this.log('error', `❌ Bank notification failed with status: ${response.status}`);
                        return filteredOrders;
                    }

                    // Get the response as blob (binary data) since it's a PNG image
                    const responseImageBlob = await response.blob();
                    this.log('success', `✅ Bank notification sent successfully - received image`);

                    // Upload the image to OKX
                    const uploadedImageUrl = await this.uploadImageToOKX(responseImageBlob);
                    if (uploadedImageUrl) {
                        // Submit payment proof to OKX
                        await this.submitPaymentProof(publicTradingOrderId, sellerDataId, uploadedImageUrl);
                    } else {
                        this.log('error', `❌ Failed to upload image`);
                    }
                } catch (error) {
                    this.log('error', `❌ Error sending bank notification: ${error.message}`);
                }

                return filteredOrders;
            } else {
                this.log('warning', `⚠️ Pending orders API returned error: ${JSON.stringify(data)}`);
                return [];
            }

        } catch (error) {
            this.log('error', `❌ Error checking pending orders: ${error.message}`);
            return [];
        }
    }

    // Health check
    healthCheck() {
        const currentTime = Date.now();
        const uptime = currentTime - this.startTime;
        const uptimeHours = uptime / (1000 * 60 * 60);

        const successRate = (this.successfulChecks / Math.max(this.totalChecks, 1)) * 100;

        this.log('info', `🏥 Health Check - Uptime: ${uptimeHours.toFixed(1)}h, ` +
            `Checks: ${this.successfulChecks}/${this.totalChecks} (${successRate.toFixed(1)}%), ` +
            `Consecutive errors: ${this.consecutiveErrors}`);
    }

    checkTimeAutoOrder(){
        //8h00 - 22h00 except 12h00 - 13h00
        const currentHour = new Date().getHours();
        return (currentHour >= 8 && currentHour < 22 && currentHour !== 12 && currentHour !== 13);
    }
    // Run a single check
    async runCheck() {
        this.totalChecks++;

        try {
            // Get buyers (people selling USDT at LOW prices - we BUY from them)
            const buyersData = await this.fetchData(this.BUYERS_URL, 'sell');
            if (!buyersData.length) {
                this.log('warning', '⚠️ No buyers data received');
                return;
            }

            const buyers = this.filterTraders(buyersData);

            // Get sellers (people buying USDT at HIGH prices - we SELL to them)
            const sellersData = await this.fetchData(this.SELLERS_URL, 'buy');
            if (!sellersData.length) {
                this.log('warning', '⚠️ No sellers data received');
                return;
            }

            const sellers = this.filterTraders(sellersData);

            this.log('info', `Found ${buyers.length} qualified traders selling USDT (we can BUY from them)`);
            this.log('info', `Found ${sellers.length} qualified traders buying USDT (we can SELL to them)`);

            if (!sellers.length || !buyers.length) {
                this.log('warning', '❌ No qualified traders found');
                return;
            }

            // Filter out abnormally priced traders to reduce risk
            const { filteredBuyers, filteredSellers } = this.filterAbnormalPricedTraders(buyers, sellers);

            if (!filteredBuyers.length || !filteredSellers.length) {
                this.log('warning', '❌ No safe traders found after price filtering');
                return;
            }

            // Find arbitrage opportunities
            const opportunities = this.findArbitrageOpportunities(filteredBuyers, filteredSellers);

            this.log('info', `Found ${opportunities.length} arbitrage opportunities`);

            if (opportunities.length > 0) {
                // Find valid opportunity
                let validOpportunity = null;

                for (let i = 0; i < opportunities.length; i++) {
                    const opportunity = opportunities[i];
                    this.log('info', `🔍 Kiểm tra opportunity #${i + 1}: ${opportunity.profit_percent.toFixed(3)}% profit`);

                    const buyTraderId = opportunity.buy_trader.id;
                    const buyTraderNickname = opportunity.buy_trader.nickname;

                    // Check buy trader availability
                    const buyTraderValid = await this.checkTraderAvailability(buyTraderId);

                    if (buyTraderValid) {
                        validOpportunity = opportunity;
                        this.log('info', `✅ Tìm thấy opportunity hợp lệ #${i + 1}`);
                        //log opportunity.buy_trader
                        const price = opportunity.buy_trader.price;
                        const publicTradingOrderId = opportunity.buy_trader.id;
                        const quoteAmount = opportunity.buy_trader.max_quote_size;
                        this.log('info', `🔍 Thông tin trader mua: ${JSON.stringify(opportunity.buy_trader)}`);
                        this.log('info', `🔍 Thông tin trader ban: ${JSON.stringify(opportunity.sell_trader)}`);

                        // Auto-execute the order
                        if (this.autoExecuteOrders && this.checkTimeAutoOrder()) {
                            //check publicTradingOrderId in localstorage, if exists, stop
                            this.loadLastOrderId();
                            if (this.publicTradingOrderId != null) {
                                this.log('warning', `⚠️ Order ${publicTradingOrderId} is already being processed - skipping`);
                                return;
                            }
                            // Validate order amount
                            var orderAmount = parseFloat(quoteAmount);
                            if (orderAmount < this.minOrderAmount) {
                                this.log('warning', `⚠️ Order amount ${orderAmount.toLocaleString()} VND below minimum ${this.minOrderAmount.toLocaleString()} VND - skipping auto-execution`);
                                return;
                            }

                            if (orderAmount > this.maxOrderAmount) {
                                orderAmount = this.maxOrderAmount;
                            }

                            this.log('info', `🎯 Auto-executing order for ${publicTradingOrderId}...`);
                            const orderExecuted = await this.executeOrder(publicTradingOrderId, quoteAmount, price);

                            if (orderExecuted) {
                                this.log('success', `✅ Successfully executed order ${publicTradingOrderId}`);
                            } else {
                                this.log('error', `❌ Failed to execute order ${publicTradingOrderId}`);
                            }
                        } else {
                            this.log('info', `⏸️ Auto-execution disabled - order ${publicTradingOrderId} found but not executed`);
                        }
                        break;
                    }
                }

                if (validOpportunity) {
                    // Check if we should send this message (anti-spam)
                    if (this.shouldSendMessage(validOpportunity)) {
                        if (this.TELEGRAM_BOT_TOKEN && this.TELEGRAM_CHAT_ID) {
                            const message = this.formatMessage(validOpportunity);
                            const success = await this.sendTelegramMessage(message);
                            if (success) {
                                // Update tracking
                                this.lastSentOpportunity = {
                                    buy_trader: validOpportunity.buy_trader.nickname,
                                    sell_trader: validOpportunity.sell_trader.nickname,
                                    buy_price: Math.round(validOpportunity.buy_trader.price),
                                    sell_price: Math.round(validOpportunity.sell_trader.price),
                                };
                                this.lastMessageTime = Date.now();

                                this.log('success', '✅ Opportunity found and notification sent');
                            } else {
                                this.log('error', '❌ Failed to send Telegram notification');
                            }
                        }
                    }
                }
            }

            this.successfulChecks++;

        } catch (error) {
            this.log('error', `❌ Error in runCheck: ${error.message}`);
            this.consecutiveErrors++;
        }
    }

    // Run bot continuously
    async runContinuous() {
        this.log('info', '🤖 Starting OKX P2P Arbitrage Bot for browser operation...');
        this.log('info', `⏰ Bot will check for opportunities every ${this.CHECK_INTERVAL / 1000} seconds`);
        this.log('info', `📋 Pending orders check every ${this.PENDING_ORDER_INTERVAL / 1000} seconds`);
        this.log('info', '❌ Call bot.stop() to stop the bot');

        // Run initial checks
        await this.runCheck();
        await this.checkPendingOrders();

        // Set up arbitrage opportunity check interval (5 seconds)
        this.intervalId = setInterval(async () => {
            if (!this.isRunning) {
                clearInterval(this.intervalId);
                return;
            }

            await this.runCheck();

            // Periodic health check (every 50 checks)
            if (this.totalChecks % 50 === 0) {
                this.healthCheck();
            }

        }, this.CHECK_INTERVAL);

        // Set up pending orders check interval (15 seconds)
        this.pendingOrderIntervalId = setInterval(async () => {
            if (!this.isRunning) {
                clearInterval(this.pendingOrderIntervalId);
                return;
            }

            console.log('\n=== CHECKING PENDING ORDERS ===');
            await this.checkPendingOrders();

        }, this.PENDING_ORDER_INTERVAL);

        this.log('success', '✅ Bot started successfully');
    }

    // Stop bot
    stop() {
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        if (this.pendingOrderIntervalId) {
            clearInterval(this.pendingOrderIntervalId);
        }
        this.log('info', '🛑 Bot stopped');
    }

    // Test function for different filtering scenarios
    // Get bot status
    getStatus() {
        const currentTime = Date.now();
        const uptime = currentTime - this.startTime;
        const successRate = (this.successfulChecks / Math.max(this.totalChecks, 1)) * 100;

        return {
            uptime_seconds: Math.floor(uptime / 1000),
            uptime_hours: uptime / (1000 * 60 * 60),
            total_checks: this.totalChecks,
            successful_checks: this.successfulChecks,
            success_rate: successRate,
            consecutive_errors: this.consecutiveErrors,
            is_running: this.isRunning,
            last_check: new Date(currentTime).toISOString()
        };
    }
}

// Global variables and functions for easy console access
let okxBot = null;

// Initialize bot
function initBot() {
    if (okxBot) {
        okxBot.stop();
    }
    okxBot = new OKXBot();
    console.log('✅ Bot initialized. Use startBot() to begin monitoring.');
    return okxBot;
}

// Start bot
async function startBot() {
    if (!okxBot) {
        initBot();
    }
    await okxBot.runContinuous();
}

// Stop bot
function stopBot() {
    if (okxBot) {
        okxBot.stop();
        console.log('🛑 Bot stopped.');
    } else {
        console.log('⚠️ No bot instance found.');
    }
}

// Check pending orders
async function checkPendingOrders() {
    if (!okxBot) {
        initBot();
    }
    console.log('\n=== CHECKING PENDING ORDERS ===');
    return await okxBot.checkPendingOrders();
}

// Run single check
async function runOnce() {
    if (!okxBot) {
        initBot();
    }
    await okxBot.runCheck();
}

// Get bot status
function getStatus() {
    if (okxBot) {
        const status = okxBot.getStatus();
        console.table(status);
        return status;
    } else {
        console.log('⚠️ No bot instance found.');
        return null;
    }
}

// Enable/disable auto order execution
function enableAutoExecution() {
    if (!okxBot) {
        initBot();
    }
    okxBot.setAutoExecuteOrders(true);
}

function disableAutoExecution() {
    if (!okxBot) {
        initBot();
    }
    okxBot.setAutoExecuteOrders(false);
}

// Set order limits
function setOrderLimits(minAmount, maxAmount) {
    if (!okxBot) {
        initBot();
    }
    okxBot.setOrderLimits(minAmount, maxAmount);
}

// Manual order execution
async function executeOrder(publicTradingOrderId, quoteAmount, usdtPrice) {
    if (!okxBot) {
        initBot();
    }
    return await okxBot.executeOrder(publicTradingOrderId, quoteAmount, usdtPrice);
}

// Auto-initialize when script loads
initBot();

console.log('🚀 OKX P2P Arbitrage Bot - JavaScript Version');
console.log('� Available commands:');
console.log('  - initBot()               : Initialize bot');
console.log('  - startBot()              : Start continuous monitoring');
console.log('  - stopBot()               : Stop bot');
console.log('  - runOnce()               : Run single check');
console.log('  - checkPendingOrders()    : Check pending orders manually');
console.log('  - getStatus()             : Get bot status');
console.log('');
console.log('🎯 Auto-execution commands:');
console.log('  - enableAutoExecution()   : Enable auto order execution');
console.log('  - disableAutoExecution()  : Disable auto order execution');
console.log('  - setOrderLimits(min, max): Set order amount limits (VND)');
console.log('  - executeOrder(id, amount, price): Manually execute order');
console.log('');
console.log('🔧 To start: startBot()');
console.log('💰 Default limits: 130,000 - 10,000,000 VND');
console.log('⚡ Auto-execution: ENABLED by default');

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        OKXBot,
        initBot,
        startBot,
        stopBot,
        runOnce,
        checkPendingOrders,
        getStatus,
        enableAutoExecution,
        disableAutoExecution,
        setOrderLimits,
        executeOrder
    };
}
