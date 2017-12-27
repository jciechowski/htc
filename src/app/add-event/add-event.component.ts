import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from '../events-list/events.service';
import { Event } from '../events-list/events';
import { PlayersService } from '../players-list/players.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventForm: FormGroup;
  title: AbstractControl;
  place: AbstractControl;
  date: AbstractControl;
  private modalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private eventService: EventsService,
    private playersService: PlayersService,
    private builder: FormBuilder
  ) {
    this.eventForm = this.builder.group({
      title: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required],
      price: '',
      facebook: ''
    });
    this.title = this.eventForm.controls['title'];
    this.place = this.eventForm.controls['place'];
    this.date = this.eventForm.controls['date'];
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
  }

  addEvent() {
    this.eventService.addEvent(this.eventForm.value);
    this.modalRef.close();
    this.eventForm.reset();
  }
}
