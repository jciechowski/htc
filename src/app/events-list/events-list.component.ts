import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: Event[];

  constructor() {
  }

  ngOnInit() {
    this.events = [
      { title: 'Jabłka', place: 'Gdańsk', date: new Date(), time: new Date().getHours(), price: 100},
      { title: 'Gruszki', place: 'Gdynia', date: new Date('05/03/2017'), time: new Date().getHours()},
      { title: 'Pomarańcze', place: 'Sopot', date: new Date('01/13/2017')}
    ];
  }

}

export interface Event {
  title: string;
  place: string;
  date: Date;
  time?: number;
  price?: number;
}
