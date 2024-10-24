import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { DoctorRegistrationComponent } from './components/doc-register/doc-register.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    AppComponent,LoginComponent,RegisterComponent,HomepageComponent,DoctorRegistrationComponent,
    BrowserModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  // bootstrapApplication: [AppComponent]
})
export class AppModule { }