import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ARAlert } from './alert.class';

@Injectable({
  providedIn: 'root'
})
export class ARAlertService {

  private subjects = new Subject<ARAlert>();

  constructor() { }

  getAlert(): Observable<any> {
    return this.subjects.asObservable();
  }

  addAlert(alert: ARAlert) {
    this.subjects.next(alert);
  }
}
