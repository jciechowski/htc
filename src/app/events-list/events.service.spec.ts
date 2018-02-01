import { TestBed, inject } from '@angular/core/testing';

import { EventsService } from './events.service';
import { TeamEvent } from './events';
import { Observable } from 'rxjs/Observable';
import { PlayersService } from 'app/players-list/players.service';
import { AngularFirestore } from 'angularfire2/firestore';

const data = Observable.of([]);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
};

const angularFiresotreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('EventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventsService,
        PlayersService,
        { provide: AngularFirestore, useValue: angularFiresotreStub }
      ]
    });
  });

  it(
    'should be created',
    inject([EventsService], (service: EventsService) => {
      expect(service).toBeTruthy();
    })
  );
});
