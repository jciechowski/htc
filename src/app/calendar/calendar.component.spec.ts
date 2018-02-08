import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarComponent, colors } from './calendar.component';
import { EventsService } from '../shared/services/events.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { PlayersService } from '../players-list/players.service';
import { CalendarEvent } from 'calendar-utils';

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(Observable.of([])),
  doc: () => {
    return { update: () => {} };
  }
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

const eventsServiceStub = {
  getCalendarEvents: jasmine.createSpy('getCalendarEvents').and.returnValue(
    Observable.of([
      {
        title: 'dummyTitle',
        color: colors.yellow,
        start: new Date('2018-01-01')
      }
    ])
  )
};

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CalendarComponent],
        imports: [BrowserAnimationsModule, CalendarModule.forRoot()],
        providers: [
          PlayersService,
          { provide: EventsService, useValue: eventsServiceStub },
          { provide: AngularFirestore, useValue: angularFirestoreStub }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get events list', () => {
    expect(component.teamEvents).toBeDefined();
  });

  it('should transform TeamEvents to calendar event', () => {
    const dummyDate = new Date('2018-01-01');
    const expected: CalendarEvent = {
      title: 'dummyTitle',
      color: colors.yellow,
      start: dummyDate
    };
    const actual = component.teamEvents[0];
    expect(actual).toEqual(expected);
  });
});
