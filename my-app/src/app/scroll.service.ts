import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPositionSubject = new Subject<number>();
  scrollPosition$ = this.scrollPositionSubject.asObservable();

  updateScrollPosition(position: number): void {
    this.scrollPositionSubject.next(position);
  }
}
