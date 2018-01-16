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
import { PlayersService } from 'app/players-list/players.service';

@Injectable()
export class EventsService {
  eventsCollection: AngularFirestoreCollection<Event>;

  constructor(private afs: AngularFirestore, private playerService: PlayersService) {}

  getFromFirebase(): Observable<Event[]> {
    this.eventsCollection = this.afs.collection<Event>('events');
    return this.eventsCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Event;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
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
        tbd: this.playerService.PlayerCount
      },
      facebook: event.facebook
    };
    this.eventsCollection.add(newEvent).then(addedEvent => (event.id = addedEvent.id));
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
    this.eventsCollection.doc<Event>(event.id).update(event);
  }
}
