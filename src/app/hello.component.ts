import { Component, Input, OnInit } from '@angular/core';
import { CccccLemon } from './mixin';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit{
  @Input() name: string;

  ngOnInit() {
    const c = new CccccLemon();
    c.printA();
    c.printB();
    c.printC();
  }
}
