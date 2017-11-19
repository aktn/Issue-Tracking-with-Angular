import { ProjectsService } from './services/projects.service';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './containers/project/project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
   { path: '', component: ProjectsComponent },
   { path: 'new', component: ProjectComponent },
   { path: ':id', component: ProjectComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    declarations:[
        ProjectsComponent,
        ProjectListComponent,
        ProjectComponent,
        ProjectFormComponent
    ],
    providers:[
        ProjectsService
    ]

})

export class ProjectsModule{

}