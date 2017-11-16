import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'login',
    styleUrls: ['login.component.scss'],
    template: `
        <div>
            <auth-form (submitted)="login($event)">
                <h3>Login</h3>
                <button type="submit">Login</button>
            </auth-form> 
        </div>
    `
})

export class LoginComponent{
    
    async login(event: FormGroup){
        try{
            //Perform login
        }
        catch(err){
            //Throw errors
        }
    }

}