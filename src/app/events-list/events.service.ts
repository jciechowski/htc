import { Player, Gender } from './../players-list/players';
import { Injectable } from '@angular/core';
import { Event, Events } from './events';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

@Injectable()
export class EventsService {
  events: Event[];
  eventsCollection: AngularFirestoreCollection<Event>;
  events$: Observable<Event[]>;

  constructor(private afs: AngularFirestore) {}

  getFromFirebase(): Observable<Event[]> {
    this.eventsCollection = this.afs.collection('events');
    return this.eventsCollection.valueChanges();
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
        tbd: 0
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
