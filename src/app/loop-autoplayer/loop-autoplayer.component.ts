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
    this.renender.addClass(this.div1.nativeElement, 'moveLeft');
    this.renender.addClass(this.div2.nativeElement, 'moveRight');
    this.renender.removeClass(this.div1.nativeElement, 'moveRight');
    this.renender.removeClass(this.div2.nativeElement, 'moveLeft');
  }

  goRight() {
    this.renender.addClass(this.div1.nativeElement, 'moveRight');
    this.renender.addClass(this.div2.nativeElement, 'moveLeft');

    this.renender.removeClass(this.div1.nativeElement, 'moveLeft');
    this.renender.removeClass(this.div2.nativeElement, 'moveRight');
  }

}