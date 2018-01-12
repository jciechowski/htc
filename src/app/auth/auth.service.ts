import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  _isLoggedIn = false;
  constructor(private afAuth: AngularFireAuth) {}

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  login(): Observable<boolean> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  logout(): void {
    this._isLoggedIn = false;
    this.afAuth.auth.signOut();
  }
}
