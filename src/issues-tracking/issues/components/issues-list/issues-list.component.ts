import { Issue } from './../../services/issues/issue.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'issues-list',
    styleUrls: ['issues-list.component.scss'],
    template:`
        <div class="issues-list">
            
         <!--   Issues list
            <a [routerLink]="getRoute(issue)">
                {{ issue.title }}
                {{ issue.description }}
                {{ issue.status }}
                {{ issue.progress }}
            </a>
            <div *ngIf="toggled">
                <button (click)="removeIssue()" type="button">Confirm</button>
                <button (click)="toggle()" type="button">Cancel</button>
            </div>
            <button (click)="toggle()">Delete</button> -->
            <table class="issues-list__table">
                <tr>
                    <td><a [routerLink]="getRoute(issue)">{{ issue?.title }}</a></td>
                    <td>{{ issue?.location }}</td>
                    <td><span class="severity" [class.low]="issue.severity===low" [class.medium]="issue.severity===medium"></span>{{ issue?.severity }}</td>
                    <td><span class="severity" [style.backgroundColor]="(issue?.status ? '#2ecc71' : '#c0392b')"></span>{{ issue?.status }}</td>
                    <td>{{ issue?.type }}</td>
                    <td>{{ issue?.description }}</td>      
                </tr> 
            </table>
        </div>
    `
    
})

export class IssuesListComponent{

    toggled = false; 

    @Input()
    issue: Issue;

    toggle(){
        this.toggled =! this.toggled;
    }

    @Output()
    remove = new EventEmitter<any>();

    removeIssue(){
        this.remove.emit(this.issue);
    }

    getRoute(issue: any){
        return [`../issues`, issue.$key];
    }

}