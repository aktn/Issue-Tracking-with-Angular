import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    { path: 'issues', loadChildren: './issues/issues.module#IssuesModule' },
    { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule
    ]
})

export class IssuesTrackingModule{
    constructor(){}

}