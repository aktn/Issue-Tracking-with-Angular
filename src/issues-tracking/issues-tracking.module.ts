import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'issues', loadChildren: './issues/issues.module#IssuesModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})

export class IssuesTrackingModule{
    constructor(){}

}