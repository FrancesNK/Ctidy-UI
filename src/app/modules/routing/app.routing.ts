import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';
import { GraduateComponent } from '../../components/graduate/graduate.component';

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
        path: 'user',
        component: UserComponent
    },
    {
        path: 'graduate',
        component: GraduateComponent
    },
    {
        path: '**',
        redirectTo: '/register'
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule]
  })


export class AppRoutingModule {}
