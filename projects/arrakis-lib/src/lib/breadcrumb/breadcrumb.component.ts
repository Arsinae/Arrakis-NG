import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ARBreadcrumbElement } from './breadcrumb.class';

@Component({
  selector: 'ar-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class ARBreadcrumbComponent implements OnInit {

  @Input() breadcrumbs: Array<ARBreadcrumbElement> = [];
  @Input() color = 'primary';

  @Output() linkSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
