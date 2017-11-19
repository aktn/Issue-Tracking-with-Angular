import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';

@Component({
    selector: 'project-form',
    styleUrls: ['project-form.component.scss'],
    template: `
        <div>
            <form [formGroup]="form">
                <label>
                    <h3>Project Name</h3>
                    <input type="text" formControlName="projectName" />
                </label>

                <button type="button" (click)="onSubmit()">
                    Create
                </button>
            </form>
        </div>
    `
})

export class ProjectFormComponent{
    
    constructor(
        private fb: FormBuilder
    ){}

    form = this.fb.group({
        projectName : ['', Validators.required]
    });

    @Output()
    submit = new EventEmitter<FormGroup>();

    onSubmit(){
        if(this.form.valid){
            this.submit.emit(this.form.value);
        }
    }

}