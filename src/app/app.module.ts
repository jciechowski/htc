import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './event/event.component';
import { PlayersService } from './players-list/players.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPlayerComponent } from './add-player/add-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    EventsListComponent,
    EventComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
