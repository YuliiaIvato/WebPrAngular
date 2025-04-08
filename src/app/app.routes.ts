import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResumeComponent } from './resume/resume.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'resume', component: ResumeComponent },
  { path: 'resume',
    component: ResumeComponent,
    canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Якщо шлях пустий — перенаправляємо на логін,
  { path: '**', redirectTo: 'login' }
];



