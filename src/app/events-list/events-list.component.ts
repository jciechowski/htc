import { Component, OnInit } from '@angular/core';
import { Player } from '../players-list/index';
import { Event } from './events';
import { EventsService } from './events.service';
import { PlayersService } from '../players-list/players.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  playersChild: Player[];
  events: Event[];
  color = 'primary';
  checked = false;

  constructor(
    private eventsService: EventsService,
    private playersService: PlayersService
  ) {}

  ngOnInit() {
    this.playersChild = this.playersService.getPlayers();
    this.events = this.eventsService.getEvents();
    this.playersService.playersUpdate.subscribe(players => {
      this.events.forEach(ev => (ev.attendance.tbd = players.length));
    });
  }

  incrementAttendance(
    slider: MatSlideToggleChange,
    event: Event,
    player: Player
  ) {
    if (player.gender === 0) {
      if (slider.checked) {
        event.attendance.woman++;
        event.attendance.tbd--;
      } else {
        event.attendance.woman--;
        event.attendance.tbd++;
      }
    }
    if (player.gender === 1) {
      if (slider.checked) {
        event.attendance.man++;
        event.attendance.tbd--;
      } else {
        event.attendance.man--;
        event.attendance.tbd++;
      }
    }
  }

  addEvent() {
    const newEvent: Event = {
      title: 'Pomarańcze',
      place: 'Sopot',
      date: new Date('01/13/2017'),
      attendance: {
        man: 0,
        woman: 0,
        tbd: this.playersService.getPlayers().length
      }
      // facebook: 'http://www.facebook.com'
    };
    this.eventsService.addEvent(newEvent);
  }
}
