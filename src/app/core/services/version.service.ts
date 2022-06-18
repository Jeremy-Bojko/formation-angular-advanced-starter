import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public numVersion$ = new BehaviorSubject(0);
  private version: number = 0;

  constructor() { }

  public incrementNumVersion(): void {
    console.log('this.numVersion$.value : ', this.numVersion$.value);
    this.numVersion$.next(this.numVersion$.value + 1);
    // this.numVersion$.next(++this.version);
  }
}
