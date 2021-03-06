import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { log } from 'util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.scss']
})
export class SsoComponent implements OnInit {

  constructor(private oAuthService:OAuthService) {
  
   }

  ngOnInit(): void {
  }
  
  logout() {
    this.oAuthService.logOut();
  }

}
