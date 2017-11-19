import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../routing/app.routing';


import { LoginComponent } from '../../components/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: []
})

export class LoginModule {

}