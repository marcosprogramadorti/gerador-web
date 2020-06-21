import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth.config.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { ProjetoModule } from './projeto/projeto.module';
import { SsoComponent } from './sso/sso.component';
import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    SsoComponent
  ],
  imports: [


    ProjetoModule,
    CompartilhadoModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    
    //SSO
    AuthConfigModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
