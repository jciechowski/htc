import { Injectable } from '@angular/core';
import { Player, Players } from './players';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {

  constructor() {
  }

  getPlayers(): Observable<Player[]> {
    return Observable.of(Players);
  }

}
