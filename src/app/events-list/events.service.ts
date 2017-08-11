import { Injectable } from '@angular/core';
import { Event, Events } from './events';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EventsService {
  events: Event[];

  constructor() {
  }

  getEvents(): Event[] {
    Observable.of(Events).subscribe(events => this.events = events);
    return this.events;
  };

  addEvent(event: Event): void {
    this.events.push(event);
  }
}
