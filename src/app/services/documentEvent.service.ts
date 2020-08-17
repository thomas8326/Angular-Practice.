import { Injectable, Optional } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

enum DocumentEventType {
  Click = 'click',
}

@Injectable({
  providedIn: 'root',
})
export class DocumnetEventService {
  documentEvent$$ = new Subject<{type: DocumentEventType, event: any}>();

  getDocumentEvent$() {
    return this.documentEvent$$.asObservable();
  }

  constructor() {
    this.listenDocumentClick();
  }

  listenDocumentClick() {
    fromEvent(
      document, 
      'click'
    ).subscribe(event => this.documentEvent$$.next({ type: DocumentEventType.Click, event: event }));
  }
}