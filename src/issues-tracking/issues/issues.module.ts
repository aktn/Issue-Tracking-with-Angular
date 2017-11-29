import { ProjectsService } from './../projects/services/projects.service';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// component 
import { IssueComponent } from './containers/issue/issue.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import { IssuesComponent } from './containers/issues.component';
import { IssuesListComponent } from './components/issues-list/issues-list.component';

// service
import { IssueService } from './services/issues/issue.service';

// feature modules
import { SharedModule } from './../shared/shared.module';


export const ROUTES: Routes = [
    { path: 'new', component: IssueComponent },
    { path: '', component: IssuesComponent },
    { path: ':id', component: IssueComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule,
        HttpModule
    ],
    declarations: [
        IssueFormComponent,
        IssueComponent,
        IssuesComponent,
        IssuesListComponent
    ],
    providers:[
        IssueService,
        ProjectsService
    ]
})

export class IssuesModule{

}