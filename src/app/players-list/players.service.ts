import { EventEmitter, Injectable } from '@angular/core';
import { Player, Players } from './players';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {
  players: Player[];
  playersUpdate: EventEmitter<Player[]> = new EventEmitter();

  constructor() {
  }

  getPlayers(): Player[] {
    Observable.of(Players).subscribe(players => this.players = players);
    return this.players;
  }

  addPlayer(player: Player): void {
    this.players.push(player);
    this.playersUpdate.emit(this.players);
  }

}
