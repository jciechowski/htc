import { TestBed, inject } from '@angular/core/testing';

import { PlayersService } from './players.service';
import { Gender } from './players';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

const data = Observable.of([]);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
};

const angularFiresotreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp({})],
      providers: [PlayersService, { provide: AngularFirestore, useValue: angularFiresotreStub }]
    });
  });

  it(
    'should be created',
    inject([PlayersService], (service: PlayersService) => {
      expect(service).toBeTruthy();
    })
  );
});
