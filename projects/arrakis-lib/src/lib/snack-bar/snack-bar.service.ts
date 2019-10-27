import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ARSnackBar } from './snack-bar.class';

@Injectable({
  providedIn: 'root'
})
export class ARSnackBarService {

  private subjects = new Subject<ARSnackBar>();

  constructor() { }

  getSnackBar(): Observable<any> {
    return this.subjects.asObservable();
  }

  addSnackBar(snackBar: ARSnackBar) {
    this.subjects.next(snackBar);
  }
}
