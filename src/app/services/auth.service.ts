import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  loginWithGoogle(): Promise<void> {
    return this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((res) => {
        if (res) {
          localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
      .catch((err) => console.log(err));
  }

  getCurrentUser(): Observable<User> {
    return this.afAuth.user;
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
