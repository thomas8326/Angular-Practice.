import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  skills: any[] = [
    {name: 'Angular', rating: 4},
    {name: 'TypeScript', rating: 4},
    {name: 'JavaScript', rating: 2},
    {name: 'React', rating: 1},
  ];

  languages: any[] = [
    {name: 'Listen', rating: 3},
    {name: 'Speak', rating: 2},
    {name: 'Read', rating: 4},
    {name: 'Write', rating: 4}
  ];

  constructor() { }

  ngOnInit() {
  }

}