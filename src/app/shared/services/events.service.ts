
import { map } from 'rxjs/operators';
import { Player, Gender } from '../models/players';
import { Injectable } from '@angular/core';
import { TeamEvent } from '../models/events';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'calendar-utils';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { PlayersService } from 'app/players-list/players.service';

@Injectable()
export class EventsService {
  eventsCollection: AngularFirestoreCollection<TeamEvent>;

  constructor(private afs: AngularFirestore, private playerService: PlayersService) {
    this.eventsCollection = this.afs.collection<TeamEvent>('events');
  }

  getEvents(): Observable<TeamEvent[]> {
    return this.eventsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as TeamEvent;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getCalendarEvents(): Observable<CalendarEvent[]> {
    return this.eventsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const teamEvent = action.payload.doc.data() as TeamEvent;
        const calendarEvent: CalendarEvent = {
          title: teamEvent.title,
          color: colors.yellow,
          start: new Date(teamEvent.date)
        };
        return calendarEvent;
      });
    }));
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
    } else {
      event.attendance[playerGender]--;
      this.removePlayer(event, player.id);
    }
  }

  private addPlayer(event: TeamEvent, playerId: string) {
    const { attendingPlayers } = event;
    attendingPlayers.push(playerId);
    this.updateEvent(event, attendingPlayers);
  }

  private removePlayer(event: TeamEvent, playerId: string) {
    event.attendingPlayers = event.attendingPlayers.filter(id => id !== playerId);
    this.updateEvent(event, event.attendingPlayers);
  }

  private updateEvent(event: TeamEvent, attendingPlayers: Array<string>): void {
    const updatedEvent: TeamEvent = {
      ...event,
      attendingPlayers
    };
    this.eventsCollection.doc<TeamEvent>(event.id).update(updatedEvent);
  }
}

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
