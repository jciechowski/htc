import { PlayersService } from './../players-list/players.service';
import { Player, Gender } from './../players-list/players';
import { Injectable } from '@angular/core';
import { Event, Events } from './events';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EventsService {
  events: Event[];

  constructor(private playersService: PlayersService) {}

  getEvents(): Event[] {
    Observable.of(Events).subscribe(events => (this.events = events));
    return this.events;
  }

  getEventStream(): Observable<Event[]> {
    return Observable.of(Events);
  }

  addEvent(event: Event): void {
    const newEvent: Event = {
      title: event.title,
      place: event.place,
      date: event.date,
      price: event.price,
      attendance: {
        man: 0,
        woman: 0,
        tbd: this.playersService.getPlayers().length
      },
      facebook: event.facebook
    };
    this.events.push(newEvent);
  }

  changeAttendance(attending: boolean, event: Event, player: Player): void {
    const playerGender = Gender[player.gender];
    if (attending) {
      event.attendance[playerGender]++;
      event.attendance.tbd--;
    } else {
      event.attendance[playerGender]--;
      event.attendance.tbd++;
    }
  }
}
