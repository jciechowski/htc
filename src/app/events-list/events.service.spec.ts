import { TestBed, inject } from '@angular/core/testing';

import { EventsService } from './events.service';
import { TeamEvent, TeamEvents } from './events';
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

  it(
    'should return events',
    inject([EventsService], (service: EventsService) => {
      expect(service.getEvents()).toEqual(TeamEvents);
    })
  );

  it(
    'should add new event',
    inject([EventsService], (service: EventsService) => {
      const beforeEventsLength = service.getEvents().length;
      const newEvent: TeamEvent = {
        title: 'Test Event',
        place: 'Some place',
        date: new Date('01/13/2017'),
        attendance: { man: 0, woman: 0, tbd: 2 }
      };
      service.addEvent(newEvent);
      expect(service.getEvents().length).toEqual(beforeEventsLength + 1);
    })
  );
});
