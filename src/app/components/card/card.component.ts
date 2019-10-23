import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public htmlCode = '<ar-card [shadow]=\"shadow\" [border]=\"rounded\">\n  <div>\n    Une carte\n  </div>\n</ar-card>';

  constructor() { }

  ngOnInit() {
  }

}
