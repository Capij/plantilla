import { Routes } from '@angular/router';
import { RegisterComponent } from './shared/auth/register/register.component'
import { LoginComponent } from './shared/auth/login/login.component'
import { MuestraComponent } from './pages/muestra/muestra/muestra.component';
import { ResetComponent } from './shared/auth/reset/reset.component';

export const ROUTES: Routes = 
[

    { path: 'muestra', component: MuestraComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'password_reset', component: ResetComponent},
    { path: '', pathMatch: 'full', redirectTo: 'muestra' },
    { path: '**', pathMatch: 'full', redirectTo: 'muestra' }

]