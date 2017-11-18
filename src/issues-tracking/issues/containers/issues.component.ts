import { Observable } from 'rxjs/Observable';
import { Store } from 'store';
import { IssueService, Issue } from './../services/issues/issue.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'issues',
    styleUrls: ['issues.component.scss'],
    template: `
        <div class="issues">
            <a [routerLink]="['../issues/new']">Create New Issue</a>
            <div *ngIf="issues$ | async as issues; else loading;">
                <issues-list *ngFor="let issue of issues" [issue]="issue" (remove)="onDelete($event)"></issues-list>
            </div>
            <ng-template #loading>
                <p>Loading....</p>
            </ng-template>
        </div>
    `
})

export class IssuesComponent implements OnInit{

     constructor(
         private issueService: IssueService,
         private store: Store
     ){}
     
     subscription: Subscription;
     issues$: Observable<Issue[]>;

     ngOnInit(){
        this.issues$ = this.store.select<Issue[]>('issues');
        this.subscription = this.issueService.issues$.subscribe();
     }

     onDelete(event: Issue){
         this.issueService.deleteIssue(event.$key);
     }
}