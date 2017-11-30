import { ProjectsService, Project } from './../../../projects/services/projects.service';
import { Issue } from './../../services/issues/issue.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store } from 'store';
import { Router } from '@angular/router';

@Component({
    selector: 'issue-form',
    styleUrls: ['issue-form.component.scss'],
    template: `
        <div class="issue-form">
            <form [formGroup]="form">
                <div class="issue-form__name">
                    <label>
                        <h3>Title</h3>
                        <input type="text" formControlName="title" />
                        <div class="error" *ngIf="checkTitle">
                            Issue title is required.
                        </div>
                    </label>

                    <label>
                        <h3>Location</h3>
                        <input type="text" formControlName="location" />
                        <div class="error" *ngIf="checkLocation">
                            Issue Location is required.
                        </div>
                    </label>

                    <label>
                        <h3>Description</h3>
                        <textarea formControlName="description"></textarea>
                        <div class="error" *ngIf="checkDescription">
                            Description is required.
                        </div>
                    </label>

                    <label>
                        <h3>Version Against</h3>
                        <input type="text" formControlName="version" />
                    </label>

                    <label>
                        <h3>Progress</h3>
                        <textarea formControlName="progress"></textarea>
                    </label>

                    <label class="label">
                        <h3>Severity</h3>
                        <select formControlName="severity">
                            <option value="">Select Type</option>
                            <option *ngFor="let s of severity" [value]="s">{{ s }}</option>
                        </select>
                    </label> 

                    <label class="label">
                        <h3>Type</h3>
                        <select formControlName="type">
                            <option value="">Select type</option>
                            <option *ngFor="let type of types" [value]="type">{{ type }}</option>
                        </select>
                    </label>

                    <label class="label">
                        <h3>Founded By</h3>
                        <select formControlName="openedBy">
                            <option value="">Select User</option>
                            <option *ngFor="let user of users" [value]="user">{{ user }}</option>
                        </select>
                    </label>

                    <label class="label">
                        <h3>Assign User</h3>
                        <select formControlName="assignTo">
                            <option value="">Select User</option>
                            <option *ngFor="let user of users" [value]="user">{{ user }}</option>
                        </select>
                    </label>

                    <label class="label">
                        <h3>Status</h3>
                        <select formControlName="status">
                            <option value="">Select Status</option>
                            <option *ngFor="let status of statusLists" [value]="status">{{ status }}</option>
                        </select>
                    </label>
                    
                    <label class="label">
                        <h3>Project</h3>
                        <div *ngIf="projects$ | async as projects">
                            <select formControlName="projectName">
                                <option value="">Select Project</option> 
                                <option *ngFor="let project of projects" [value]="project.$key">{{ project.projectName }}</option>
                            </select>
                        </div>
                    </label>
                    
                </div>

                <div class="issue-form__submit">
                    <div>
                        <button type="button" class="button" (click)="createIssue()" *ngIf="!exists">Submit</button>
                        <button type="button" class="button" (click)="updateIssue()" *ngIf="exists">Update</button>
                    </div>

                    <div class="issue-form__delete" *ngIf="exists">
                        <button type="button" class="button button--cancel" (click)="cancel()">Cancel</button>
                        <button type="button" class="button button--delete" (click)="removeIssue()">Delete</button>
                    </div>
                </div>
            </form>
        </div>
    `
})

export class IssueFormComponent implements OnChanges, OnDestroy{

    constructor(
        private fb: FormBuilder,
        private projectService: ProjectsService,
        private store: Store,
        private router: Router
    ){}

    @Input()
    issue: Issue;

    projects$: Observable<Project[]>;
    subscription: Subscription;

    ngOnChanges(changes: SimpleChanges){
        if(this.issue && this.issue.title){
            this.exists = true;
        }

        const value = this.issue;
        this.form.patchValue(value);
        
        this.projects$ = this.store.select<Project[]>('projects');
        this.subscription = this.projectService.projects$.subscribe();
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    severity = [ 'low', 'medium', 'high' ];

    types = ['Usability', 'Accessibility', 'Content', 'Other'];

    statusLists = ['open', 'handle', 'close'];

    today = Date.now();

    exists = false;

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
        projectName: ['', Validators.required],
        createdDate: [this.today, Validators.required] 
    });

    @Input()
    users: any;

    @Output()
    create = new EventEmitter<Issue>();

    createIssue(){
        if(this.form.valid){
            this.create.emit(this.form.value);
        }
    }

    @Output()
    update = new EventEmitter<Issue>();
    
    updateIssue(){
        if(this.form.valid){
            this.update.emit(this.form.value);
        }
    }

    @Output()
    remove = new EventEmitter<Issue>();

    removeIssue(){
        this.remove.emit(this.form.value);
    }

    cancel(){
        this.router.navigate(['issues']);
    }


    /*
    * Form Validation
    */
    get checkTitle(){
        const control = this.form.get('title');
        return control.hasError('required') && control.touched;
    }

    get checkLocation(){
        const control = this.form.get('location');
        return control.hasError('required') && control.touched;
    }

    get checkDescription(){
        const control = this.form.get('description');
        return control.touched && control.hasError('required');
    }

}