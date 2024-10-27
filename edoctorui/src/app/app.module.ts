import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { DoctorRegistrationComponent } from './components/doc-register/doc-register.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { Validator } from './components/utils/validation';
@NgModule({
  declarations: [],
  imports: [
    AppComponent,LoginComponent,HomepageComponent,DoctorRegistrationComponent,
    BrowserModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
   // Validator
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  // bootstrapApplication: [AppComponent]
})
export class AppModule { }
