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
    this.renderList(10);
  }

  renderList(length: number, isUnshift = false) {
    for(let i = 0; i < length; i++) {
      if (isUnshift) {
        this.list.unshift(`item${i}`);
      } else {
        this.list.push(`item${i}`);
      }
    }
  }

  getLoadDataCommand() {
    console.log('test');
  }

  unshift() {
    this.renderList(5, true);
  }
}