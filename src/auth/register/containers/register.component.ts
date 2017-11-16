import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth/auth.service';
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

    constructor(
        private router: Router,
        private authService: AuthService
    ){}

    error : string;

    async addUser(event: FormGroup){
        try{
            await this.authService.addUser(event.value.email, event.value.password);
            this.router.navigate(['/']);
        }
        catch(err){
            this.error = err;
        }
    }
}