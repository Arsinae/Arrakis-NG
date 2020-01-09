import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss']
})
export class InputColorComponent implements OnInit {

  public htmlCode = ' <ar-input-number display="single" color="danger" [increment]="2" [min]="-10" [max]="10"></ar-input-number>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
  }

}
