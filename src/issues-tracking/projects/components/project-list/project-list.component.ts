import { Project } from './../../services/projects.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'project-list',
    styleUrls: ['project-list.component.scss'],
    template: `
        <div>
            Project List
            {{ project.projectName }}
        </div>
    `
})

export class ProjectListComponent{
    
    @Input()
    project: Project



}