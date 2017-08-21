import { EventEmitter, Injectable } from '@angular/core';
import { Player, Players } from './players';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {
  playersUpdate: EventEmitter<Player[]> = new EventEmitter();
  private players: Player[];
  private availableNumbers: Set<number> = new Set<number>();

  constructor() {
    this.setAvailableNumbers();
  }

  private setAvailableNumbers() {
    for (let i = 0; i < 100; i++) {
      this.availableNumbers.add(i);
    }
  }

  getPlayers(): Player[] {
    Observable.of(Players).subscribe(players => this.players = players);
    return this.players;
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
