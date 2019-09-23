import { Routes } from '@angular/router';
import { RegisterComponent } from './shared/auth/register/register.component'
import { LoginComponent } from './shared/auth/login/login.component'

export const ROUTES: Routes = 
[

    { path: 'registro', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

]