import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Angular Fire modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const ROUTER: Routes = [
    {
        path : 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'auth' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' }
        ]
    }
];

export const config = {
    apiKey: "AIzaSyBcz9yOJYFlJc-mMcjaNz1vok7ZexBeRsA",
    authDomain: "issue-tracking-3a92b.firebaseapp.com",
    databaseURL: "https://issue-tracking-3a92b.firebaseio.com",
    projectId: "issue-tracking-3a92b",
    storageBucket: "",
    messagingSenderId: "1014585641768"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTER),
        SharedModule.forRoot(),
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ]
})

export class AuthModule{ }
