import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../routing/app.routing';


import { RegisterComponent } from '../../components/register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  //bootstrap: [RegisterComponent]
})
export class RegisterModule {

}
