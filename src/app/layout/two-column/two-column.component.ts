import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-column',
  templateUrl: './two-column.component.html',
  styleUrls: ['./two-column.component.css']
})
export class TwoColumnComponent implements OnInit {

  @Input() columnWidth = '1fr 1fr';

  constructor() { }

  ngOnInit() {
  }

}