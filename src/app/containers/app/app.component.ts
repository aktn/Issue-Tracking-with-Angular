import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService, User } from './../../../auth/shared/services/auth/auth.service';
import { Store } from 'store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-nav *ngIf="(user$ | async)?.authenticated" [user]="user$ | async" (logout)="onLogout()"></app-nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
    
  ) {}

  user$: Observable<User>;

  ngOnInit(){
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  async onLogout(){
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
