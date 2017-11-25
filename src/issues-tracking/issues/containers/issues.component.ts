import { Observable } from 'rxjs/Observable';
import { Store } from 'store';
import { IssueService, Issue } from './../services/issues/issue.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'issues',
    styleUrls: ['issues.component.scss'],
    template: `
        <div class="issues">
            <a [routerLink]="['../issues/new']">Create New Issue</a>
            <input type="text" (keydown)="search($event)" placeholder="search ..." class="input">
            <div *ngIf="issues$ | async as issues;  else loading;">
                <table>  
                    <tr>
                        <th (click)="setOrder('severity')">
                            Severity <span [hidden]="reverse">▼</span><span [hidden]="!reverse">▲</span>
                        </th>
                        <th (click)="setOrder('status')">
                            Status <span [hidden]="reverse">▼</span><span [hidden]="!reverse">▲</span>
                        </th>
                        <th (click)="setOrder('type')">
                            Type <span [hidden]="reverse">▼</span><span [hidden]="!reverse">▲</span>
                        </th>
                    </tr>

                    <issues-list *ngFor="let issue of issues | orderBy : order : reverse" [issue]="issue" (remove)="onDelete($event)">
                    </issues-list>

                    <div *ngFor="let issue of issues">
                        <h4>{{issue?.title}}</h4>
                        <p>
                            {{issue?.title}}
                        </p>
                    </div>

                </table>
            </div>

            <ng-template #loading>
                <p>Loading....</p>
            </ng-template>
    `
})

export class IssuesComponent implements OnInit{

     constructor(
         private issueService: IssueService,
         private store: Store
     ){}
     
     subscription: Subscription[] = [];
     issues$: Observable<any[]>;
     searchLists: any; //For keyword search
    
     ngOnInit(){
        this.issues$ = this.store.select<Issue[]>('issues');
        this.subscription = 
        [
            this.issueService.issues$.subscribe(), 
            this.issueService.keywordSearch(this.startAt, this.endAt).subscribe() 
        ]
     }

     onDelete(event: Issue){
         this.issueService.deleteIssue(event.$key);
     }
     
     /**
     * Order by for severity, type, status
     */
     order: string;
     reverse: boolean = false;
     setOrder(value: string) {
         if (this.order === value) {
           this.reverse = !this.reverse;
         }
         this.order = value;
     }

     /*
     * Search by keyword
     */
     startAt = new Subject();
     endAt = new Subject();

     lastKeypress: number = 0;

     search($event: any) {
        if ($event.timeStamp - this.lastKeypress > 200) {
           let q = $event.target.value
           this.startAt.next(q);
           this.endAt.next(q+"\uf8ff");
         }
        this.lastKeypress = $event.timeStamp;
     }

}