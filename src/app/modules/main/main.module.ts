import { UserInfoService } from './../../services/user-info/user-info.service';
import { UserComponent } from './../../components/user/user.component';
import { MainComponent } from './../../components/main/main.component';
import { AppRoutingModule } from './../../modules/routing/app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { GraduateComponent } from '../../components/graduate/graduate.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserComponent,
    GraduateComponent,
    MainComponent
  ],
  providers: [UserInfoService],
  bootstrap: [MainComponent]
})
export class MainModule { }