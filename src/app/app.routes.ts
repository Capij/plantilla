import { Routes } from '@angular/router';
import { RegisterComponent } from './shared/auth/register/register.component'
import { LoginComponent } from './shared/auth/login/login.component'
import { MuestraComponent } from './pages/muestra/muestra/muestra.component';
import { ResetComponent } from './shared/auth/reset/reset.component';

import { PanelComponent } from './pages/panel/panel.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
export const ROUTES: Routes = 
[

    { path: 'dashbord', component: PanelComponent},
    { path: 'projects', component: ProyectosComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'password_reset', component: ResetComponent},
    { path: '', pathMatch: 'full', redirectTo: 'dashbord' },
    { path: '**', pathMatch: 'full', redirectTo: 'dashbord' }

]