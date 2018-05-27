
import {from as observableFrom,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = afAuth.authState;
  }

  login(): Observable<boolean> {
    return observableFrom(
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
