import { Component, OnInit } from '@angular/core';
import { Player, Players } from '../players-list/index';
import { Event } from './events';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  playersChild: Player[];
  events: Event[];

  constructor() {
  }

  ngOnInit() {
    this.playersChild = Players;
    this.events = [
      {
        title: 'Jabłka',
        place: 'Gdańsk',
        date: new Date(),
        time: new Date().getHours(),
        price: 100,
        attendance: {man: 0, woman: 0, tbd: this.playersChild.length}
      },
      {
        title: 'Gruszki',
        place: 'Gdynia',
        date: new Date('05/03/2017'),
        time: new Date().getHours(),
        attendance: {man: 0, woman: 0, tbd: this.playersChild.length}
      },
      {
        title: 'Owocki',
        place: 'Wejherowo',
        date: new Date('06/03/2017'),
        time: new Date().getHours(),
        attendance: {man: 0, woman: 0, tbd: this.playersChild.length}
      },
      {
        title: 'Pomarańcze',
        place: 'Sopot',
        date: new Date('01/13/2017'),
        attendance: {man: 0, woman: 0, tbd: this.playersChild.length},
        facebook: 'http://www.facebook.com'
      }
    ];
  }

  incrementAttendance(event: Event, element: HTMLInputElement, player: Player) {
    if (player.gender === 0) {
      if (element.checked) {
        event.attendance.woman++;
        event.attendance.tbd--;
      } else {
        event.attendance.woman--;
        event.attendance.tbd++;
      }
    }
    if (player.gender === 1) {
      if (element.checked) {
        event.attendance.man++;
        event.attendance.tbd--;
      } else {
        event.attendance.man--;
        event.attendance.tbd++;
      }
    }
  }
}
