import {Component, OnInit} from '@angular/core';
import { Player, Gender } from './index';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players: Player[];
  Gender: typeof Gender = Gender;

  constructor(private playersService: PlayersService) {
  }

  ngOnInit() {
    this.players = this.playersService.getPlayers();
  }
}
