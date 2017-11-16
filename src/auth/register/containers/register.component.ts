import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'register',
    styleUrls: ['register.component.scss'],
    template:`
    <div>   
        <auth-form>
            <h3>Add user</h3>
            <button type="submit">Add</button>
        </auth-form>
    </div>
    `
})

export class RegisterComponent{

}