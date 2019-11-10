import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { ARPanelComponent } from './panel/panel.component';

@Component({
  selector: 'ar-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class ARAccordionComponent implements OnInit {

  @Input() autoClose = true;

  @ContentChildren(ARPanelComponent) panels: QueryList<ARPanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.panels.forEach(panel => {
      panel.stateChange.subscribe((event) => {
        if (event === true) {
          this.closePanel(panel);
        }
      });
    });
  }

  closePanel(current) {
    if (this.autoClose) {
      this.panels.forEach(panel => {
        if (panel !== current) {
          Promise.resolve(null).then(() => {
            if (panel.open) {
              panel.open = false;
            }
          });
        }
      });
    }
  }

}
