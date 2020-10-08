import { Routes } from '@angular/router';
import { RegisterComponent } from './shared/auth/register/register.component'
import { LoginComponent } from './shared/auth/login/login.component'
import { MuestraComponent } from './pages/muestra/muestra/muestra.component';
import { ResetComponent } from './shared/auth/reset/reset.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { TeamsComponent } from './pages/leagues/teams/teams.component'

import { AuthGuard } from './shared/guard/auth.guard';
import { importType } from '@angular/compiler/src/output/output_ast';

export const ROUTES: Routes = 
[

    { path: 'dashboard', component: MuestraComponent, canActivate: [AuthGuard] },
    { path: 'leagues', component: LeaguesComponent, canActivate: [AuthGuard] },
    { path: 'leagues/:id', component: TeamsComponent, canActivate: [AuthGuard] },


    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'password_reset', component: ResetComponent},
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

]