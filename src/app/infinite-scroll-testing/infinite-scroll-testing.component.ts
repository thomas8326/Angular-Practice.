import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-testing',
  templateUrl: './infinite-scroll-testing.component.html',
  styleUrls: ['./infinite-scroll-testing.component.css']
})
export class InfiniteScrollTestingComponent implements OnInit {

  @ViewChild('sensor', {static: true}) sensor: ElementRef;
  list: string[] = [];

  constructor() { }

  ngOnInit() {
    this.renderList();
    this.intersectionObserable();
  }

  renderList() {
    for(let i = 0; i < 100; i++) {
      this.list.push(`item${i}`);
    }
  }

  intersectionObserable() {
    new IntersectionObserver(([entry])=> console.log(entry), {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }).observe(this.sensor.nativeElement);
  }

}