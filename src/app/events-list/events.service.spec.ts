import { TestBed, inject } from '@angular/core/testing';

import { EventsService } from './events.service';
import { Event, Events } from './events';
import { Observable } from 'rxjs/Observable';

describe('EventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsService]
    });
  });

  it('should be created', inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return events', inject([EventsService], (service: EventsService) => {
    expect(service.getEvents()).toEqual(Observable.of(Events));
  }));

  it('should add new event', inject([EventsService], (service: EventsService) => {
    const beforeEventsLength = service.events.length;
    const newEvent: Event = {
      title: 'Test Event',
      place: 'Some place',
      date: new Date('01/13/2017'),
      attendance: {man: 0, woman: 0, tbd: 2},
    };
    service.addEvent(newEvent);
    expect(service.events.length).toEqual(beforeEventsLength + 1);
  }))
});
