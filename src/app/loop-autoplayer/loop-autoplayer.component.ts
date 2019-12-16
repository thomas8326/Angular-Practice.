import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loop-autoplayer',
  templateUrl: './loop-autoplayer.component.html',
  styleUrls: ['./loop-autoplayer.component.css']
})
export class LoopAutoplayerComponent implements AfterViewInit {

  @ViewChild('autoplayer',  {static: true}) autoplayer: ElementRef<any>;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.autoplayer);
  }

}