import { Routes } from '@angular/router';
import { LoginScreenComponent } from 'app/login-screen/login-screen.component';
import { EventsListComponent } from 'app/events-list/events-list.component';
import { AuthGuard } from 'app/auth/auth.guard';
import { CalendarComponent } from 'app/calendar/calendar.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'events', component: EventsListComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
