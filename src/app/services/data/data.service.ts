import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService  {
  private messageSource = new BehaviorSubject('Default');
  currentMessage = this.messageSource.asObservable();
  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
