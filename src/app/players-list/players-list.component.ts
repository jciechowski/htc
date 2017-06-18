import {Component, OnInit} from '@angular/core';
import { Player, Gender, Players } from './index';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players: Player[];
  Gender: typeof Gender = Gender;

  constructor() {
  }

  ngOnInit() {
    this.players = Players;
  }
}
