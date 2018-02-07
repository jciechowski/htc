import { TestBed, inject } from '@angular/core/testing';

import { EventsService } from './events.service';
import { TeamEvent } from '../models/events';
import { Observable } from 'rxjs/Observable';
import { PlayersService } from 'app/players-list/players.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Player, Gender } from '../models/players';

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(Observable.of([])),
  doc: () => {
    return { update: () => {} };
  }
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('EventsService', () => {
  let service: EventsService;
  let eventStub: TeamEvent;

  const manPlayer: Player = {
    id: 'dummyId',
    gender: Gender.man,
    jerseyNumber: 0,
    lastname: 'dummyLastname',
    name: 'dummyName'
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventsService,
        PlayersService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });
    service = TestBed.get(EventsService);
    eventStub = {
      id: 'dummyId',
      attendance: { man: 0, woman: 0 },
      attendingPlayers: [],
      date: new Date(),
      place: 'dummyPlace',
      price: 0,
      title: 'dummyTitle'
    };
  });

  it('should be created', () => expect(service).toBeTruthy());

  it('should increase attendance', () => {
    const initialAttendance = eventStub.attendance.man;
    service.changeAttendance(true, eventStub, manPlayer);
    expect(eventStub.attendance.man).toEqual(initialAttendance + 1);
  });

  it('should decrease attendance', () => {
    const initialAttendance = eventStub.attendance.man;
    service.changeAttendance(false, eventStub, manPlayer);
    expect(eventStub.attendance.man).toEqual(initialAttendance - 1);
  });

  it('should mark player as attending', () => {
    service.changeAttendance(true, eventStub, manPlayer);
    expect(eventStub.attendingPlayers).toContain(manPlayer.id);
  });

  it('should unmark player from attending', () => {
    service.changeAttendance(true, eventStub, manPlayer);
    service.changeAttendance(false, eventStub, manPlayer);
    expect(eventStub.attendingPlayers).not.toContain(manPlayer.id);
  });
});
