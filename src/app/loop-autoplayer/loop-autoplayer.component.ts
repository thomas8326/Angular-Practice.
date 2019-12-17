import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-loop-autoplayer',
  templateUrl: './loop-autoplayer.component.html',
  styleUrls: ['./loop-autoplayer.component.css']
})
export class LoopAutoplayerComponent implements AfterViewInit {

  @ViewChild('autoplayer',  {static: true}) autoplayer: ElementRef<any>;
  @ViewChild('div1',  {static: true}) div1: ElementRef<any>;
  @ViewChild('div2',  {static: true}) div2: ElementRef<any>;

  constructor(private renender: Renderer2) { }

  ngAfterViewInit() {
    console.log(this.autoplayer.nativeElement.getBoundingClientRect());
  }

  goLeft() {
    this.renender.setStyle(this.div1.nativeElement, 'display', 'none');
    this.renender.setStyle(this.div2.nativeElement, 'display', 'flex');
  }

  goRight() {
    this.renender.setStyle(this.div1.nativeElement, 'display', 'flex');
    this.renender.setStyle(this.div2.nativeElement, 'display', 'none');
  }

}