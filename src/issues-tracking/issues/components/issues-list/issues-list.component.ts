import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'issues-list',
    styleUrls: ['issues-list.component.scss'],
    template:`
        <div class="issues-list">
            <table class="issues-list__table">
                <tr>
                    <td><a [routerLink]="getRoute(issue)">{{ issue?.title }}</a></td>
                    <td>{{ issue?.location }}</td>
                    <td><span class="severity" [class.low]="issue.severity==='low'" 
                                               [class.medium]="issue.severity==='medium'" 
                                               [class.high]="issue.severity==='high'"></span>{{ issue?.severity }}</td>
                    <td>{{ issue?.status }}</td>
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
    issue: any;

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