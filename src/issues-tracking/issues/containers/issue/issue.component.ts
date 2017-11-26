import { Subscription } from 'rxjs/Subscription';
import { Issue, IssueService } from './../../services/issues/issue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'issue',
    styleUrls: ['issue.component.scss'],
    template: `
        <div class="issue">
            <div class="issue__title">
                <h2>
                    <span *ngIf="issues$ | async as issue; else title;">{{ issue.title ? 'Edit ' : 'Create ' }}Issue</span>
                    <ng-template #title>
                        Loading ...
                    </ng-template>
                </h2>
            </div>
            <span *ngIf="issues$ | async as issues; else loading;">
                <issue-form (create)="createIssue($event)" [issue]="issues" (update)="updateIssue($event)" (remove)="deleteIssue($event)"></issue-form>
            </span>
            <ng-template #loading>
                <p>Loading...</p>
            </ng-template>
        </div>
    `
})

export class IssueComponent implements OnInit, OnDestroy{

    constructor(
        private issueService: IssueService,
        private route: ActivatedRoute,
        private router: Router
    ){}
    
    issues$ : Observable<Issue[]>;
    subscription: Subscription;

    ngOnInit(){
        this.subscription = this.issueService.issues$.subscribe();
        this.issues$ = this.route.params.switchMap(param => this.issueService.getIssue(param.id));
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    async createIssue(event: Issue){
        await this.issueService.createIssue(event);
        this.backToList();
    }

    async updateIssue(event: Issue){
        const key = this.route.snapshot.params.id;
        await this.issueService.updateIssue(key, event);
        this.backToList();
    }

    async deleteIssue(event: Issue){
        const key = this.route.snapshot.params.id;
        await this.issueService.deleteIssue(key);
        this.backToList();
    }

    backToList(){
        this.router.navigate(['issues']);
    }
}