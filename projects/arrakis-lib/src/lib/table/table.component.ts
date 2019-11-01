import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, animate, keyframes, style } from '@angular/animations';
import { ARTableHeader, ARTableRow } from './table.class';

@Component({
  selector: 'ar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('verticalAnimation', [
      transition('* => *', [
        query(':enter', animate('.3s ease-in', keyframes([
            style({opacity: 0.2, transform: 'translateY(-50%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ])), {optional: true}),
          query(':leave', animate('.3s ease-in', keyframes([
              style({opacity: 1, offset: 0}),
              style({opacity: 0, maxHeight: 0, transform: 'translateY(50%)', offset: 1.0}),
            ])), {optional: true})
      ])
    ]),
    trigger('horizontalAnimation', [
      transition('* => *', [
        query(':enter', animate('.3s ease-in', keyframes([
            style({opacity: 0.2, transform: 'translateX(-50%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
          ])), {optional: true}),
          query(':leave', animate('.3s ease-in', keyframes([
              style({opacity: 1, offset: 0}),
              style({opacity: 0, maxHeight: 0, transform: 'translateX(50%)', offset: 1.0}),
            ])), {optional: true})
      ])
    ])
  ]
})
export class ARTableComponent implements OnInit {

  @Input() header: Array<ARTableHeader> = [];
  @Input() rows: Array<ARTableRow> = [];
  @Input() tableAnimation: string = 'horizontal';
  @Input() color: string = null;

  constructor() { }

  ngOnInit() {
  }

  getRowClasses(row: ARTableRow) {
    if (row.color) {
      return `ar-table-row ar-color-${row.color} ar-color-${row.color}-hover`
    } else {
      return (this.color ? `ar-table-row ar-color-${this.color}-hover` : 'ar-table-row');
    }
  }

  getRowValue(id: string, row: Array<{id: string, value: any}>): any {
    const value = row.filter(value => { return value.id === id; });
    return (value.length !== 0 ? value[0].value : '');
  }

}
