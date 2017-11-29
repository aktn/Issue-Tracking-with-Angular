import { IssuesTrackingModule } from './../issues-tracking/issues-tracking.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppNav } from './containers/app/components/app-nav/app.nav.component';

// routes
export const ROUTES: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'issues' } ];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    IssuesTrackingModule
  ],
  declarations: [
    AppComponent,
    AppNav
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
