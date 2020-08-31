import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() data: object;
  @Input() isLoader: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getDate() {
    return new Date(this.data['lastUpdate']).toDateString()
  }

}
