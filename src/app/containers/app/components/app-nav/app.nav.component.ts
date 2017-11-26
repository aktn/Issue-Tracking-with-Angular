import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    styleUrls: ['app-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="projects" routerLinkActive="active">Projects</a>
            </div>
        </div>
    `
})

export class AppNav{}