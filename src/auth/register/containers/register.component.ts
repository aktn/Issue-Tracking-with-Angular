import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'register',
    styleUrls: ['register.component.scss'],
    template:`
    <div>   
        <auth-form (submitted)="addUser($event)">
            <h3>Add user</h3>
            <button type="submit">Add</button>
            <div *ngIf="error" class="error">
                {{ error }}
            </div>
        </auth-form>
    </div>
    `
})

export class RegisterComponent{
    addUser(event: FormGroup){
        try{
            //add user logic
        }
        catch(err){
            //errors
        }
    }
}