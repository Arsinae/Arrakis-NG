import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-fixed-background',
  templateUrl: './fixed-background.component.html',
  styleUrls: ['./fixed-background.component.scss']
})
export class ARFixedBackgroundComponent implements OnInit {

  @Input() image: string = '';
  @Input() position: string = 'center';

  constructor() { }

  ngOnInit() {
  }

}
