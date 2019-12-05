import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intersection-indicator',
  templateUrl: './intersection-indicator.component.html',
  styleUrls: ['./intersection-indicator.component.css']
})
export class IntersectionIndicatorComponent implements OnInit {

  @Output() loadData = new EventEmitter();

  @ViewChild('sensor', {static: true}) sensor: ElementRef;

  constructor() { }

  ngOnInit() {
    this.intersectionObserable();
  }

  intersectionObserable() {
    new IntersectionObserver(([entry])=> this.loadData.emit(), {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }).observe(this.sensor.nativeElement);
  }

}