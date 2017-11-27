import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './event/event.component';
import { PlayersService } from './players-list/players.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddEventComponent } from './add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from './events-list/events.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    EventsListComponent,
    EventComponent,
    AddPlayerComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [PlayersService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
