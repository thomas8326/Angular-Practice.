import { Component, OnInit } from '@angular/core';

interface Card {
  id: string;
  groupName: string;
  lastMessage: string;
  file?: any[];
}


@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {

  data: Card;

  constructor() { }

  ngOnInit() {
    this.data = {
      id: '21231d23f1a32sf1sa3d',
      groupName: 'QA Team',
      lastMessage: 'Hello',
    }
  }

}