import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    template: `
        <div class="form">
            <form (ngSubmit)="onSubmit()" [formGroup]="form">
                <ng-content select="h3"></ng-content>
                <label>
                    <input type="text" formControlName="email" placeholder="Eamil" />
                </label>
                <label>
                    <input type="password" formControlName="password" placeholder="Password" />
                </label>
                <div *ngIf="checkEmail">
                    Errors in email
                </div>
                <div *ngIf="checkPassword">
                    Errors in password
                </div>
                <div>
                    <ng-content select=".error"></ng-content>
                </div>
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
        email: ['', Validators.email],
        password: ['', Validators.required]
    });

    /*
    * Form Validations
    */

    get checkEmail(){
        const validate = this.form.get('email');
        return validate.hasError('email') && validate.touched;
    }

    get checkPassword(){
        const validate = this.form.get('password');
        return validate.hasError('required') && validate.touched;
    }

    /*
    * Emitting values
    */

    @Output()
    submitted = new EventEmitter<FormGroup>();

    onSubmit(){
        if(this.form.valid){
            console.log(this.form.value);
            this.submitted.emit(this.form);
        }
    }
}