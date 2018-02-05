import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = afAuth.authState;
  }

  login(): Observable<boolean> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
