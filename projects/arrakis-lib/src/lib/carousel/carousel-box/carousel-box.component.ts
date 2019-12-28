import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-carousel-box',
  templateUrl: './carousel-box.component.html',
  styleUrls: ['./carousel-box.component.scss']
})
export class ARCarouselBoxComponent implements OnInit {

  @Output() displayChange: EventEmitter<any> = new EventEmitter();

  public displayed = false;

  constructor() { }

  ngOnInit() {
  }

}
