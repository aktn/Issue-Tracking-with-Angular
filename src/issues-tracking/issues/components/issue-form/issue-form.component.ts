import { Issue } from './../../services/issues/issue.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'issue-form',
    styleUrls: ['issue-form.component.scss'],
    template: `
        <div>
            <form [formGroup]="form">
                <label>
                    <h3>Title</h3>
                    <input type="text" formControlName="title" />
                </label>

                <label>
                    <h3>Description></h3>
                    <textarea formControlName="description"></textarea>
                </label>

                <label>
                    <h3>Severity</h3>
                    <select formControlName="severity">
                        <option value="">Select Type</option>
                        <option *ngFor="let s of severity" [value]="s">{{ s }}</option>
                    </select>
                </label>

                <label>
                    <h3>Status</h3>
                    <input type="radio" id="status" value="true" formControlName="status">Open
                    <input type="radio" id="status" value="false" formControlName="status">Close
                </label>

                <label>
                    <h3>Location</h3>
                    <input type="text" formControlName="location" />
                </label>

                <label>
                    <h3>Version Against</h3>
                    <input type="text" formControlName="version" />
                </label>

                <label>
                    <h3>Type</h3>
                    <select formControlName="type">
                        <option value="">Select type</option>
                        <option *ngFor="let type of types" [value]="type">{{ type }}</option>
                    </select>
                </label>

                <label>
                    <h3>Founded By</h3>
                    <select formControlName="openedBy">
                        <option value="">Select User</option>
                        <option *ngFor="let user of users" [value]="user">{{ user }}</option>
                    </select>
                </label>

                <label>
                    <h3>Assign User</h3>
                    <select formControlName="assignTo">
                        <option value="">Select User</option>
                        <option *ngFor="let user of users" [value]="user">{{ user }}</option>
                    </select>
                </label>

                <label>
                    <h3>Progress</h3>
                    <textarea formControlName="progress"></textarea>
                </label>

                <button type="button" (click)="createIssue()">Submit</button>
            </form>
        </div>
    `
})

export class IssueFormComponent{

    constructor(
        private fb: FormBuilder
    ){}

    users = ['James', 'Michael', 'Kurt', 'Jimmy'];

    severity = [ 'low', 'medium', 'high' ];

    types = ['Usability', 'Accessibility', 'Content', 'Other'];

    today = Date.now();

    form = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        severity: ['', Validators.required],
        location: ['', Validators.required],
        status: ['', Validators.required],
        openedBy: ['', Validators.required],
        assignTo : ['', Validators.required],
        progress: ['', Validators.required],
        version: ['', Validators.required],
        type: ['', Validators.required],
        createdDate: [this.today, Validators.required] 
    });

    @Output()
    create = new EventEmitter<Issue>();

    createIssue(){
        this.create.emit(this.form.value);
    }
}