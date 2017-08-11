import { Component, OnInit } from '@angular/core';
import { Player, Players } from '../players-list/index';
import { Event } from './events';
import { Gender } from '../players-list/players';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsService]
})
export class EventsListComponent implements OnInit {
  playersChild: Player[];
  events: Event[];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.playersChild = Players;
    this.eventsService.getEvents().then(events => this.events = events);
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

  addPlayer() {
    this.playersChild.push({name: 'Jan', lastname: 'Nowak', jerseyNumber: 1, gender: Gender.man});
  }

  addEvent() {
    this.events.push({
      title: 'Pomarańcze',
      place: 'Sopot',
      date: new Date('01/13/2017'),
      attendance: {man: 0, woman: 0, tbd: this.playersChild.length},
      facebook: 'http://www.facebook.com'
    });
  }
}
