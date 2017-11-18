import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// component 
import { IssueComponent } from './containers/issue/issue.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';

// service
import { IssueService } from './services/issues/issue.service';


export const ROUTES: Routes = [
    { path: 'new', component: IssueComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        IssueFormComponent,
        IssueComponent
    ],
    providers:[
        IssueService
    ]
})

export class IssuesModule{

}