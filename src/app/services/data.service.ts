import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private detailsSubject = new BehaviorSubject<any>(null)

  constructor() {
  }

  setDetails(details: any) {
    this.detailsSubject.next(details);
  }

  getDetails() {
    return this.detailsSubject.asObservable();
  }
}
