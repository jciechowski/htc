import { Injectable } from '@angular/core';
import { Event, Events } from './events';

@Injectable()
export class EventsService {
  events: Event[];

  constructor() {
    this.events = Events;
  }

  getEvents(): Promise<Event[]> {
    return Promise.resolve(this.events);
  };

  // addEvent()
}
