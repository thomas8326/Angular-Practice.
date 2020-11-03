import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DocumnetEventService } from './services/documentEvent.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  projectStatus = 'Inbox';

  formGroup: FormGroup;

  constructor() {
  
  }

  ngOnInit() {
    console.log('test');
    this.formGroup = new FormGroup({username: new FormControl('')});
    this.formGroup.valueChanges.subscribe(value => console.log(value));
  }
}
