import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' } // Redirect to login page if no path is specified
];
