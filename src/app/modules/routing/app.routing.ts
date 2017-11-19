import { LoginComponent } from './../../components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../../components/register/register.component';

const appRouts: Routes = [
    {
        path: '',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(appRouts);
