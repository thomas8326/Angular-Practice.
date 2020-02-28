import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
  }

  download() {
    // const doc = new j();

    // doc.text('Hello world!', 10, 10)
    // doc.save('a4.pdf')
  }
}
