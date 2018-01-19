import { Player, Gender } from './../players-list/players';
import { Injectable } from '@angular/core';
import { TeamEvent } from './events';
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
  eventsCollection: AngularFirestoreCollection<TeamEvent>;

  constructor(private afs: AngularFirestore, private playerService: PlayersService) {}

  getEvents(): Observable<TeamEvent[]> {
    this.eventsCollection = this.afs.collection<TeamEvent>('events');
    return this.eventsCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as TeamEvent;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  addEvent(event: TeamEvent): void {
    const newEvent: TeamEvent = {
      title: event.title,
      place: event.place,
      date: event.date,
      price: event.price,
      attendance: {
        man: 0,
        woman: 0
      },
      facebook: event.facebook,
      attendingPlayers: []
    };
    this.eventsCollection.add(newEvent).then(addedEvent => (event.id = addedEvent.id));
  }

  changeAttendance(attending: boolean, event: TeamEvent, player: Player): void {
    const playerGender = Gender[player.gender];
    if (attending) {
      event.attendance[playerGender]++;
      this.addPlayer(event, player.id);
      event.attendingPlayers.push(player.id);
    } else {
      event.attendance[playerGender]--;
      this.removePlayer(event, player.id);
    }
  }

  addPlayer(event: TeamEvent, playerId: string) {
    let { attendingPlayers } = event;
    attendingPlayers.push(playerId);
    this.updateEvent(event, attendingPlayers);
  }

  removePlayer(event: TeamEvent, playerId: string) {
    let attendingPlayers = event.attendingPlayers.filter(id => id !== playerId);
    this.updateEvent(event, attendingPlayers);
  }

  updateEvent(event: TeamEvent, attendingPlayers: Array<string>): void {
    const updatedEvent: TeamEvent = {
      ...event,
      attendingPlayers
    };
    this.eventsCollection.doc<TeamEvent>(event.id).update(updatedEvent);
  }
}
