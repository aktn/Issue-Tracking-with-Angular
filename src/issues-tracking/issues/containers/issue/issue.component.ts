import { Issue, IssueService } from './../../services/issues/issue.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'issue',
    styleUrls: ['issue.component.scss'],
    template: `
        <div class="issue">
            <issue-form (create)="createIssue($event)"></issue-form>
        </div>
    `
})

export class IssueComponent{

    constructor(
        private issueService: IssueService
    ){}

    async createIssue(event: Issue){
        await this.issueService.createIssue(event);
        console.log(event);
    }
}