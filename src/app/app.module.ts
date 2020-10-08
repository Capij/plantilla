import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { MatProgressBarModule,MatAutocompleteModule, MatProgressSpinnerModule, MatExpansionModule, MatSelectModule, MatTabsModule, MatTableModule, MatMenuModule, MatDialogModule,MatInputModule,MatFormFieldModule, MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/auth/login/login.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { MuestraComponent } from './pages/muestra/muestra/muestra.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { ResetComponent } from './shared/auth/reset/reset.component';
import { DialogLigaComponent } from './pages/leagues/dialog-liga/dialog-liga.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { TeamsComponent } from './pages/leagues/teams/teams.component';
import { DialogTeamsComponent } from './pages/leagues/teams/dialog-teams/dialog-teams.component';
import { DialogJourneyComponent } from './pages/leagues/teams/dialog-journey/dialog-journey.component';
import { JounaryComponent } from './pages/jounary/jounary.component';
import { DialogGameComponent } from './pages/leagues/teams/dialog-game/dialog-game.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MuestraComponent,
    SidenavComponent,
    ResetComponent,
    DialogLigaComponent,
    LeaguesComponent,
    TeamsComponent,
    DialogTeamsComponent,
    DialogJourneyComponent,
    JounaryComponent,
    DialogGameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES ),
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  entryComponents:[
    DialogLigaComponent,
    DialogTeamsComponent,
    DialogJourneyComponent,
    DialogGameComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
