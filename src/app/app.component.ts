import { Component, OnInit } from '@angular/core';
import { DocumnetEventService } from './services/documentEvent.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  projectStatus = 'Inbox';

  constructor(private documentEvent: DocumnetEventService) {

  }

  ngOnInit() {
    this.documentEvent.getDocumentEvent$().subscribe(console.log)
  }
}
