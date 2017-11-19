
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './routing/app.routing';


import { RegisterComponent } from './../components/register/register.component';
import { LoginComponent } from './../components/login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule {

}