import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTER: Routes = [
    {
        path : 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'auth' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTER),
        SharedModule
    ]
})

export class AuthModule{ }
