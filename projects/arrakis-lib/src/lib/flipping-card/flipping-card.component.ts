import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class ARFlippingCardComponent implements OnInit {

  @Input() shadow: string = 'shadow';
  @Input() rounded: boolean = false;
  @Input() bounce = false;
  @Input() height = 200;

  @Output() cardFlipped: EventEmitter<any> = new EventEmitter();

  public isFlip = false;

  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.isFlip = !this.isFlip;
    this.cardFlipped.emit(this.isFlip);
  }

}
