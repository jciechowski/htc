import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent } from './events-list.component';
import { PlayersListComponent } from '../players-list/players-list.component';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsListComponent,
        PlayersListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

