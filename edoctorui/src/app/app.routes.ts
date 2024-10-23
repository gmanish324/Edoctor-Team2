import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DoctorRegistrationComponent } from './components/doc-register/doc-register.component';
// import { UserdashboardComponent } from './userdashboard/userdashboard.component';
export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'doc-register', component:DoctorRegistrationComponent},
  { path: '', pathMatch: 'full', redirectTo: 'homepage' }, // Redirect to login page if no path is specified
  // { path: 'userdashboard', component:UserdashboardComponent}
];
