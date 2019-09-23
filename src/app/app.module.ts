import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/auth/login/login.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MuestraComponent } from './pages/muestra/muestra/muestra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    MuestraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
