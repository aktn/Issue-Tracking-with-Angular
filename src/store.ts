import { Project } from './issues-tracking/projects/services/projects.service';
import { User } from './auth/shared/services/auth/auth.service';
import { Issue } from './issues-tracking/issues/services/issues/issue.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
  [key: string]: any,
  user: User,
  issues: Issue[],
  projects: Project[]
}


const state: State = {
  user: undefined,
  issues: undefined,
  projects: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
