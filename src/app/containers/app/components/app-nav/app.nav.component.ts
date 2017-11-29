import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { User } from 'src/auth/shared/services/auth/auth.service';

@Component({
    selector: 'app-nav',
    styleUrls: ['app-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="projects" routerLinkActive="active">Projects</a>
                <div class="logout" *ngIf="user?.authenticated">
                    <span (click)="logoutUser()"><img src="/img/logout.svg"></span>
                </div>
            </div>  
        </div>
    `
})

export class AppNav{
    @Output()
    logout = new EventEmitter<any>();

    @Input()
    user: User;

    logoutUser(){
        this.logout.emit();
    }
}