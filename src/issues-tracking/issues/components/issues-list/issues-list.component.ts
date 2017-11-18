import { Issue } from './../../services/issues/issue.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'issues-list',
    styleUrls: ['issues-list.component.scss'],
    template:`
        <div>
            Issues list
            {{ issue.title }}
            {{ issue.description }}
            {{ issue.status }}
            {{ issue.progress }}
            <div *ngIf="toggled">
                <button (click)="removeIssue()" type="button">Confirm</button>
                <button (click)="toggle()" type="button">Cancel</button>
            </div>
            <button (click)="toggle()">Delete</button>
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
}