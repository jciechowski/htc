import { TestBed, inject } from '@angular/core/testing';

import { EventsService } from './events.service';
import { TeamEvent } from './events';
import { Observable } from 'rxjs/Observable';
import { PlayersService } from 'app/players-list/players.service';

describe('EventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsService, PlayersService]
    });
  });

  it(
    'should be created',
    inject([EventsService], (service: EventsService) => {
      expect(service).toBeTruthy();
    })
  );
});
