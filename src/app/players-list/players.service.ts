import { EventEmitter, Injectable } from '@angular/core';
import { Player } from './players';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { TeamEvent } from '../events-list/events';
import { EventsService } from 'app/events-list/events.service';

@Injectable()
export class PlayersService {
  playersUpdate: EventEmitter<Player[]> = new EventEmitter();
  private playersCollection: AngularFirestoreCollection<Player>;
  private players$: AngularFirestoreDocument<Player[]>;
  private availableNumbers: Set<number> = new Set<number>();

  constructor(private afs: AngularFirestore) {
    this.playersCollection = this.afs.collection('players');

    this.playersCollection.valueChanges().subscribe(allPlayers => {
      this.setAvailableNumbers(allPlayers.map(player => player.jerseyNumber));
    });
  }

  private setAvailableNumbers(usedNumbers: number[]) {
    Array.from(Array(100).keys())
      .filter(number => !usedNumbers.includes(number))
      .forEach(i => {
        this.availableNumbers.add(i);
      });
  }

  getPlayers(): Observable<Player[]> {
    return this.playersCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Player;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  addPlayer(player: Player): void {
    this.availableNumbers.delete(player.jerseyNumber);
  }

  get getAvailableNumbers(): Set<number> {
    return this.availableNumbers;
  }
}
