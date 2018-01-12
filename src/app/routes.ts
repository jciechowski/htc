import { Routes } from '@angular/router';
import { LoginScreenComponent } from 'app/login-screen/login-screen.component';
import { EventsListComponent } from 'app/events-list/events-list.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'events', component: EventsListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
