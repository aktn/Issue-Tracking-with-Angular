import { Project } from './projects.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export interface Project{
    projectName: string,
    $key: string
}

@Injectable()
export class ProjectsService{

    constructor(
        private db: AngularFireDatabase,
        private store: Store
    ){}

    projects$: Observable<Project[]> = this.db.list(`projects`).do(next => this.store.set('projects', next));

    createProject(project: Project){
        this.db.list(`projects`).push(project);
    }

    retrieveProjects(key: string){
        if(!key) return Observable.of({});

        return this.store.select<Project[]>('projects').filter(Boolean)
            .map(projects => projects.find((project: Project) => project.$key === key));
    }
}