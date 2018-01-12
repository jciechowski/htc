import { EventEmitter, Injectable } from '@angular/core';
import { Player, Players } from './players';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

@Injectable()
export class PlayersService {
  playersUpdate: EventEmitter<Player[]> = new EventEmitter();
  private playersCollection: AngularFirestoreCollection<Player>;
  private players$: AngularFirestoreDocument<Player[]>;
  private players: Player[];
  private availableNumbers: Set<number> = new Set<number>();

  constructor(private afs: AngularFirestore) {
    this.setAvailableNumbers();
  }

  private setAvailableNumbers() {
    for (let i = 0; i < 100; i++) {
      this.availableNumbers.add(i);
    }
  }

  getPlayersFirebase(): Observable<Player[]> {
    this.playersCollection = this.afs.collection('players');
    return this.playersCollection.valueChanges();
  }

  addPlayer(player: Player): void {
    this.players.push(player);
    this.playersUpdate.emit(this.players);
    this.availableNumbers.delete(player.jerseyNumber);
  }

  getAvailableNumbers(): Set<number> {
    return this.availableNumbers;
  }
}
