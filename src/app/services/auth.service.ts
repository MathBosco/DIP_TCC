import { User } from './../interfaces/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  Register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  Login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.senha);
  }

  getAuth() {
    return this.afa.auth;
  }
}
