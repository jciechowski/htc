import { Component, OnInit } from '@angular/core';
import { Player } from '../players-list/index';
import { TeamEvent } from './events';
import { EventsService } from './events.service';
import { PlayersService } from '../players-list/players.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  players$: Observable<Player[]>;
  teamEvents$: Observable<TeamEvent[]>;
  color = 'primary';
  checked = false;

  constructor(private eventsService: EventsService, private playersService: PlayersService) {}

  ngOnInit() {
    this.players$ = this.playersService.getPlayers();
    this.teamEvents$ = this.eventsService.getEvents();
  }

  changeAttendance(slider: MatSlideToggleChange, event: TeamEvent, player: Player) {
    this.eventsService.changeAttendance(slider.checked, event, player);
  }

  playerAttending(event: TeamEvent, player: Player): boolean {
    return event.attendingPlayers.includes(player.id);
  }
}
