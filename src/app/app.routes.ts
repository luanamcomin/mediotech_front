import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { UsersComponent } from './pages/users/users.component';
import { AnnoucementsComponent } from './pages/annoucements/annoucements.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'annoucements', component: AnnoucementsComponent},

];
