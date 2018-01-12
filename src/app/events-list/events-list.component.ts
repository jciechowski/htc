import { Component, OnInit } from '@angular/core';
import { Player } from '../players-list/index';
import { Event } from './events';
import { EventsService } from './events.service';
import { PlayersService } from '../players-list/players.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  players$: Observable<Player[]>;
  events$: Observable<Event[]>;
  color = 'primary';
  checked = false;

  constructor(private eventsService: EventsService, private playersService: PlayersService) {}

  ngOnInit() {
    this.players$ = this.playersService.getPlayersFirebase();
    this.events$ = this.eventsService.getFromFirebase();
    // this.playersService.playersUpdate.subscribe(players => {

    //   this.events$.forEach(ev => (ev.attendance.tbd = players.length));
    // });
  }

  changeAttendance(slider: MatSlideToggleChange, event: Event, player: Player) {
    this.eventsService.changeAttendance(slider.checked, event, player);
  }

  addEvent() {
    const newEvent: Event = {
      title: 'Pomarańcze',
      place: 'Sopot',
      date: new Date('01/13/2017'),
      attendance: {
        man: 0,
        woman: 0,
        tbd: 0
      }
    };
    this.eventsService.addEvent(newEvent);
  }
}
