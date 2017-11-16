import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    template: `
        <div class="form">
            <form (ngSubmit)="onSubmit()" [formGroup]="form">
                <ng-content select="h3"></ng-content>
                <label>
                    <input type="text" formControlName="username" placeholder="Username" />
                </label>
                <label>
                    <input type="password" formControlName="password" placeholder="Password" />
                </label>
                <div>
                    <ng-content select="button"></ng-content>
                </div>
            </form>
        </div>
    `
})

export class AuthFormComponent{
    constructor(private fb:FormBuilder){}

    form = this.fb.group({
        username: '',
        password: ''
    });

    @Output()
    submitted = new EventEmitter<FormGroup>();

    onSubmit(){
        console.log(this.form.value);
        this.submitted.emit(this.form);
    }
}