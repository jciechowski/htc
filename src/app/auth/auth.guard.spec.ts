import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from 'app/auth/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

const fakeAuthState = new BehaviorSubject(null);

const angularFireAuthStub = {
  authState: fakeAuthState,
  auth: {}
};
const routerStub = {
  navigate: jasmine.createSpy('navigate')
};
const authServiceStub = {
  authState$: new Subject<boolean>()
};

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let isAuth$: Subscription;
  let isAuthRef: boolean;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: AngularFireAuth, useValue: angularFireAuthStub }
      ]
    });
    guard = TestBed.get(AuthGuard);
  });

  beforeEach(() => {
    isAuth$ = guard.canActivate().subscribe(isAuth => (isAuthRef = isAuth));
  });

  afterEach(() => {
    isAuth$.unsubscribe();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be initially authenticated', () => {
    authServiceStub.authState$.next(false);
    expect(isAuthRef).toBeFalsy();
  });

  it('should redirect when not logged in', () => {
    authServiceStub.authState$.next(false);
    expect(routerStub.navigate).toHaveBeenCalledWith(['login']);
  });

  it('should allow activation when logged in', () => {
    authServiceStub.authState$.next(true);
    guard.canActivate().subscribe(canActivate => expect(canActivate).toBeTruthy());
  });
});
