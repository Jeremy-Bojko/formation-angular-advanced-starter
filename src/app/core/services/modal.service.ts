import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public subModal$ = new Subject<{title: string, content: string}>();

  constructor() { }

  public displayModal(title: string, content: string): void {
    this.subModal$.next({title, content});
  }
}
