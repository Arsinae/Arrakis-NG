import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class ARTestimonialCardComponent implements OnInit {

  @Input() headerHeight: number = 100;
  @Input() color: string = 'primary';
  @Input() imageSize: number = 50;
  @Input() imageSrc: string = '';
  @Input() shadow: string = 'shadow'

  constructor() { }

  ngOnInit() {
  }

  get CardClass() {
    return 'ar-testimonial-card-container ar-' + this.shadow;
  }

  get HeaderClass() {
    return 'ar-testimonial-card-header ar-background-color-' + this.color;
  }

}
