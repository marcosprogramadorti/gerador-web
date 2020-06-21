
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, AuthConfig } from 'angular-oauth2-oidc';
import { authConfig, OAuthModuleConfig } from './auth.config';
import { AuthconfigService } from './authconfig.service';
import { CommonModule } from '@angular/common';

export function init_app(authConfigService: AuthconfigService) {
  return () => authConfigService.initAuth();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, 
    OAuthModule.forRoot()
  ],
  providers: [
    AuthconfigService,
    { provide: AuthConfig, useValue: authConfig },
    OAuthModuleConfig,
    { 
      provide: APP_INITIALIZER, 
      useFactory: init_app, 
      deps: [ AuthconfigService ], 
      multi: true
    }
  ]
})
export class AuthConfigModule { }
