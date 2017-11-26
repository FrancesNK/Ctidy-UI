import { LoginComponent } from './../../components/login/login.component';
import { RegisterComponent } from './../../components/register/register.component';
import { AppRoutingModule } from './../routing/app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})

export class LoginModule {}
