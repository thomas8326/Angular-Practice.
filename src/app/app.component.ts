import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  projectStatus = 'Inbox'0
  path = `{space}/projects/{id}?status={aaa}&bbb = {ccc}`;
  spaceMap = {
      ['market']: 'market',
      ['workspace']: 'workspace/showroom'
    };

  replace = {
    ['id']: '123',
    ['ownerId']: '321',
    ['space']: 'workspace',
    // ['aaa']: 'apple'
  }
  contnt {
  categories: {
    appearl: 'appearl'
  },
  "name": "userna"

  }

  ngOnInit() {
    // replace['owner'] === '321' = 'workspace' : ''
    Object.keys(this.replace).forEach(key => {
      if (key === 'space') {
        console.log(this.replace['space']);
        console.log(this.spaceMap[this.replace['space']]);
        this.replace['space'] = this.spaceMap[this.replace['space']];
      }
    });

    console.log(this.replace);

    console.log(this.stringFormat(this.path, this.replace));
  }

  download() {
    console.log(this.stringFormat(this.path, this.replace));
    // const doc = new j();

    // doc.text('Hello world!', 10, 10)
    // doc.save('a4.pdf')
  }

  stringFormat = (str: string, args: { [key: string]: string }) => {
    return Object.keys(args).reduce(
      (accumulator, currentValue) => accumulator.replace(new RegExp(`\\{${currentValue}\\}`, 'gm'), args[currentValue]||''),
      str
    )
  } 
}
