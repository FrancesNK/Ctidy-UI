import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '/register'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule]
  })


export class AppRoutingModule {}
