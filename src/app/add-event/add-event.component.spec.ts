import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventComponent } from './add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from '../shared/services/events.service';
import { PlayersService } from '../players-list/players.service';

describe('AddEventComponent', () => {
  let component: AddEventComponent;
  let fixture: ComponentFixture<AddEventComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AddEventComponent],
        imports: [ReactiveFormsModule, NgbModule.forRoot()],
        providers: [EventsService, PlayersService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
