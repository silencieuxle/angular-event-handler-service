import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EventHandlerService {
  private subjects: Subject<any>[] = [];

  constructor() { }

  $subscribe(name: string): Observable<any> {
    this.initSubscribeByName(name);
    return this.subjects[name].asObservable();
  }

  publish(name: string, result: any) {
    this.initSubscribeByName(name);
    return this.subjects[name].next(result);
  }

  private initSubscribeByName(name: string) {
    if (!this.subjects[name]) {
      this.subjects[name] = new Subject<any>();
    }
  }
}
