import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth/auth.service';
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
                <div *ngIf="error" class="error">
                    {{ error }}
                </div>
            </auth-form> 
        </div>
    `
})

export class LoginComponent{
    
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    error : string;

    async login(event: FormGroup){
        try{
           await this.authService.loginUser(event.value.email, event.value.password); 
           this.router.navigate(['/']);
        }
        catch(err){
            this.error = err;
        }
    }

}