import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-testing',
  templateUrl: './infinite-scroll-testing.component.html',
  styleUrls: ['./infinite-scroll-testing.component.css']
})
export class InfiniteScrollTestingComponent implements OnInit {
  list: string[] = [];

  constructor() { }

  ngOnInit() {
    this.renderList();
  }

  renderList() {
    for(let i = 0; i < 100; i++) {
      this.list.push(`item${i}`);
    }
  }

  getLoadDataCommand() {
    console.log('test');
  }
}