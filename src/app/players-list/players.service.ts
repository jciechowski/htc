import { EventEmitter, Injectable } from '@angular/core';
import { Player, Players } from './players';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Event } from '../events-list/events';

@Injectable()
export class PlayersService {
  playersUpdate: EventEmitter<Player[]> = new EventEmitter();
  private playersCollection: AngularFirestoreCollection<Player>;
  private players$: AngularFirestoreDocument<Player[]>;
  private availableNumbers: Set<number> = new Set<number>();
  private _playerCount: number;
  private eventsCollection: AngularFirestoreCollection<Event>;

  get PlayerCount() {
    return this._playerCount;
  }

  constructor(private afs: AngularFirestore) {
    this.playersCollection = this.afs.collection('players');
    this.playersCollection
      .valueChanges()
      .subscribe(allPlayers => (this._playerCount = allPlayers.length));
    this.setAvailableNumbers();
    this.eventsCollection = this.afs.collection('events');
  }

  private setAvailableNumbers() {
    for (let i = 0; i < 100; i++) {
      this.availableNumbers.add(i);
    }
  }

  getPlayersFirebase(): Observable<Player[]> {
    return this.playersCollection.valueChanges();
  }

  addPlayer(player: Player): void {
    // this.players.push(player);
    this.playersCollection.add(player).then(() => {
      this._playerCount++;
    });
    // this.eventsCollection.valueChanges().subscribe(events => {
    //   events.forEach(event => {
    //     event.attendance.tbd++;
    //     this.eventsCollection.doc<Event>(event.title).update(event);
    //   });
    // });
    // this.playersUpdate.emit(this.players);
    this.availableNumbers.delete(player.jerseyNumber);
  }

  getAvailableNumbers(): Set<number> {
    return this.availableNumbers;
  }
}
