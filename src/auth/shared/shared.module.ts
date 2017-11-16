import { LoginComponent } from './../login/containers/login.component';
import { AuthFormComponent } from './componenets/auth-form/auth-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations:[
        AuthFormComponent
    ],
    exports:[
        AuthFormComponent
    ]
})

export class SharedModule{
    
}