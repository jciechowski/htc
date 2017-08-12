import { Component, OnInit } from '@angular/core';
import { Player } from '../players-list/index';
import { Event } from './events';
import { Gender } from '../players-list/players';
import { EventsService } from './events.service';
import { PlayersService } from '../players-list/players.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsService]
})
export class EventsListComponent implements OnInit {
  playersChild: Player[];
  events: Event[];

  constructor(private eventsService: EventsService, private playersService: PlayersService) {
  }

  ngOnInit() {
    this.playersChild = this.playersService.getPlayers();
    this.events = this.eventsService.getEvents();
    this.playersService.playersUpdate.subscribe(players => {
      this.events.forEach(ev => ev.attendance.tbd = players.length)
    });
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
    const newPlayer = {name: 'Jan', lastname: 'Nowak', jerseyNumber: 1, gender: Gender.man};
    this.playersService.addPlayer(newPlayer);
  }

  addEvent() {
    const newEvent: Event = {
      title: 'Pomarańcze',
      place: 'Sopot',
      date: new Date('01/13/2017'),
      attendance: {man: 0, woman: 0, tbd: this.playersService.getPlayers().length},
      facebook: 'http://www.facebook.com'
    };
    this.eventsService.addEvent(newEvent);
  }
}
