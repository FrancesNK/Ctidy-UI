import { AppRoutingModule } from './../routing/app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: []
})
export class RegisterModule { }
