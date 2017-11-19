import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Project, ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Store } from 'store';

@Component({
    selector: 'projects',
    styleUrls: ['projects.component.scss'],
    template: `
        <div>
            <a [routerLink]="['../projects/new']">Create New Project</a>
            <div *ngIf="projects$ | async as projects; else loading;">
                <project-list *ngFor="let project of projects" [project]="project"></project-list>
            </div>
            <ng-template #loading>
                Loading...
            </ng-template>
        </div>
    `
})

export class ProjectsComponent implements OnInit{

    subscription: Subscription;
    projects$: Observable<Project[]>;

    constructor(
        private projectsService: ProjectsService,
        private store: Store
    ){}

    ngOnInit(){
        this.subscription = this.projectsService.projects$.subscribe();
        this.projects$ = this.store.select<Project[]>('projects');
    }
}