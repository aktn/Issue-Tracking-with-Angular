import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './containers/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const ROUTER: Routes = [
    { path: '', component: LoginComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTER),
        SharedModule
    ],
    declarations: [
        LoginComponent
    ]
})

export class LoginModule{}