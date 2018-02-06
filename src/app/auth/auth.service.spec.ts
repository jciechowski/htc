import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';

const fakeAuthState = new BehaviorSubject(null);

const angularFireAuthStub = {
  authState: fakeAuthState,
  auth: {}
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: AngularFireAuth, useValue: angularFireAuthStub }]
    });

    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
