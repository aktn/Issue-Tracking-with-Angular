import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './../login/containers/login.component';
import { AuthFormComponent } from './componenets/auth-form/auth-form.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
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
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [
                AuthService
            ]
        }
    }
}