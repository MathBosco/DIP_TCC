import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthProvider{
    constructor(
    public afAuth : AngularFireAuth
){
} 

register = (data) => this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);

login = (data) => this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
}
