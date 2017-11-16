import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';

export interface User{
    userID: string,
    name: string,
    email: string,
    authenticated: boolean
}

@Injectable()
export class AuthService{
    constructor(
        private store: Store,
        private ngFire: AngularFireAuth
    ){}

    auth$ = this.ngFire.authState
        .do(next => {
            if(!next){
                this.store.set('user', null);
                return;
            }
            const user: User = {
                userID: next.uid,
                name: next.displayName,
                email: next.email,
                authenticated: true
            }
            this.store.set('user', user);
        });
    
    addUser(email: string, password: string){
        return this.ngFire.auth.createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string){
        return this.ngFire.auth.signInWithEmailAndPassword(email, password);
    }

    logoutUser(){
        return this.ngFire.auth.signOut();
    }

    get currentAuthState(){
        return this.ngFire.authState;
    }
}