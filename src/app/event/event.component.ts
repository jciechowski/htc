import { Component, Input, OnInit } from '@angular/core';
import { TeamEvent } from '../events-list/events';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: TeamEvent;

  constructor() {}

  ngOnInit() {}
}
