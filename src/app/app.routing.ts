import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

const appRouts: Routes = [
    {
        path: '',
        component: AppComponent
    }
];

export const routing = RouterModule.forRoot(appRouts);
