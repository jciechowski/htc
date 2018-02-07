import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatSlideToggleModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './event/event.component';
import { PlayersService } from './players-list/players.service';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsService } from './events-list/events.service';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { APP_ROUTES } from 'app/routes';
import { environment } from 'environments/environment';
import { AuthService } from 'app/auth/auth.service';
import { AuthGuard } from 'app/auth/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    EventsListComponent,
    EventComponent,
    AddPlayerComponent,
    AddEventComponent,
    LoginScreenComponent,
    NavbarComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [PlayersService, EventsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
