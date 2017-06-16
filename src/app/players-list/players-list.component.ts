import {Component, OnInit} from '@angular/core';

export interface Player {
  name: string;
  lastname: string;
  jerseyNumber: number;
  gender: Gender;
}

export enum Gender {
  woman, man
}

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
    this.players = [
      {name: 'Jan', lastname: 'Nowak', jerseyNumber: 1, gender: Gender.man},
      {name: 'Grażynka', lastname: 'Kościej', jerseyNumber: 13, gender: Gender.woman},
      {name: 'Jadzia', lastname: 'Goździkowa', jerseyNumber: 6, gender: Gender.woman},
      {name: 'Andrzej', lastname: 'ZRivi', jerseyNumber: 23, gender: Gender.man}
    ];
  }

}
