import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './events-list/event/event.component';
import { PlayersService } from './players-list/players.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    EventsListComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
