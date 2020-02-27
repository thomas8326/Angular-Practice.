import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() stars: number;

  @Input() starsCount = 5;

  @Input() title: string;
  starsCountAry: number[] = [];

  constructor() { }

  ngOnInit() {
    this.starsCountAry = new Array(this.starsCount);
  }
}