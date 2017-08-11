import { Injectable } from '@angular/core';
import { Event, Events } from './events';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EventsService {
  events: Event[];

  constructor() {
    this.events = Events;
  }

  getEvents(): Observable<Event[]> {
    return Observable.of(this.events);
  };

  addEvent(event: Event): void {
    this.events.push(event);
  }
}
