import { MainComponent } from './../../components/main/main.component';
import { AppRoutingModule } from './../../modules/routing/app.routing';
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
    LoginComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }