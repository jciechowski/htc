import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EventComponent } from './event/event.component';
import { PlayersService } from './players-list/players.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EventsListComponent,
        PlayersListComponent,
        EventComponent
      ], providers: [
        PlayersService
      ],
    }).compileComponents();
  }));
});
