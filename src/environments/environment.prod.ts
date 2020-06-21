export const environment = {
  production: true,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://app-sso-keycloak.herokuapp.com/auth/realms/clientes',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'https://gerador-web.herokuapp.com/',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'gerador-prod',

    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: false,
    // at_hash is not present in JWT token
    showDebugInformation: true,
    disableAtHashCheck: true
    
  }
};
