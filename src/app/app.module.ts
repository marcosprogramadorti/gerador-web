import { ProjetoModule } from './projeto/projeto.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { TesteComponent } from './teste/teste.component';
import { SsoComponent } from './sso/sso.component';

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
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
