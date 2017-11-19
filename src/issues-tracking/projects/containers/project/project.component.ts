import { ProjectsService, Project } from './../../services/projects.service';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'project',
    styleUrls: ['project.component.scss'],
    template: `
        <div>
            Project
            <project-form (submit)="createProject($event)"></project-form>
        </div>
    `
})

export class ProjectComponent{

    constructor(
        private projectsService: ProjectsService
    ){}

    async createProject(event: Project){
        await this.projectsService.createProject(event);
    }
}