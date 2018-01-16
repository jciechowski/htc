import { EventEmitter, Injectable } from '@angular/core';
import { Player, Players } from './players';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { TeamEvent } from '../events-list/events';

@Injectable()
export class PlayersService {
  playersUpdate: EventEmitter<Player[]> = new EventEmitter();
  private playersCollection: AngularFirestoreCollection<Player>;
  private players$: AngularFirestoreDocument<Player[]>;
  private availableNumbers: Set<number> = new Set<number>();
  private _playerCount: number;
  private eventsCollection: AngularFirestoreCollection<TeamEvent>;

  get PlayerCount() {
    return this._playerCount;
  }

  constructor(private afs: AngularFirestore) {
    this.playersCollection = this.afs.collection('players');
    this.playersCollection.valueChanges().subscribe(allPlayers => {
      this._playerCount = allPlayers.length;
      this.setAvailableNumbers(allPlayers.map(player => player.jerseyNumber));
    });
    this.eventsCollection = this.afs.collection('events');
  }

  private setAvailableNumbers(usedNumbers: number[]) {
    Array.from(Array(100).keys())
      .filter(number => !usedNumbers.includes(number))
      .forEach(i => {
        this.availableNumbers.add(i);
      });
  }

  getPlayersFirebase(): Observable<Player[]> {
    return this.playersCollection.valueChanges();
  }

  addPlayer(player: Player): void {
    this.playersCollection.add(player).then(() => {
      this._playerCount++;
    });
    this.availableNumbers.delete(player.jerseyNumber);
  }

  get getAvailableNumbers(): Set<number> {
    return this.availableNumbers;
  }
}
