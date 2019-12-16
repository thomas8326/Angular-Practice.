import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renender2 } from '@angular/core';

@Component({
  selector: 'app-loop-autoplayer',
  templateUrl: './loop-autoplayer.component.html',
  styleUrls: ['./loop-autoplayer.component.css']
})
export class LoopAutoplayerComponent implements AfterViewInit {

  @ViewChild('autoplayer',  {static: true}) autoplayer: ElementRef<any>;

  constructor(private renender: Renender2) { }

  ngAfterViewInit() {
    console.log(this.autoplayer.nativeElement.getBoundingClientRect());
  }

  goLeft() {
    this.renender.setStyle(this.autoplayer.nativeElement, 'left', '10px');
    console.log(this.autoplayer.nativeElement.getBoundingClientRect());
  }

}