import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './../../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export interface Issue{
    $key: string,
    title: string,
    description: string,
    severity: string,
    assignTo: string,
    foundBy: string,
    location: string,
    status: boolean,
    version: string,
    progress: string,
    createdDate: number,
}

@Injectable()
export class IssueService{

    constructor(
        private store: Store,
        private db: AngularFireDatabase
    ){}

    issues$: Observable<Issue[]> = this.db.list(`issues`).do(next => this.store.set('issues',next));

    createIssue(issue: Issue){
        return this.db.list(`issues`).push(issue);
    }

    deleteIssue(key: string){
        return this.db.list(`issues`).remove(key);
    }
}