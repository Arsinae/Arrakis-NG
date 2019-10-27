import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, stagger, animate, keyframes, style } from '@angular/animations';

import { ARAlert } from './alert.class';
import { ARAlertService } from './alert.service';

@Component({
  selector: 'ar-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('alertAnimation', [
      transition('* => *', [
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({opacity: 0.2, transform: 'translateX(75%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
          ]))]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('.5s ease-in', keyframes([
              style({opacity: 1, transform: 'translateX(0)', offset: 0}),
              style({opacity: 0, transform: 'translateX(100%)', offset: 1.0}),
            ]))]), {optional: true})
      ])
    ])
  ]
})
export class ARAlertComponent implements OnInit {

  @Input() timer = 5000;

  public alerts: Array<{alert: ARAlert, timer: any}> = [];

  constructor(private alertService: ARAlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: ARAlert) => {
      const newAlert = {alert: alert, timer: setTimeout(() => {
        this.deleteOnTimer(newAlert);
      }, (alert.timer ? alert.timer : this.timer))};
      this.alerts.push(newAlert);
    });
  }

  deleteOnTimer(closeAlert) {
    for (let i = 0; i < this.alerts.length; i++) {
      if (this.alerts[i].timer === closeAlert.timer) {
        this.alerts.splice(i, 1);
      }
    }
  }

  closeAlert(index) {
    clearTimeout(this.alerts[index].timer);
    this.alerts.splice(index, 1);
  }

  getIcon(type) {
    if (type === 'danger') {
      return 'fas fa-exclamation-triangle';
    } else if (type === 'warning') {
      return 'fas fa-exclamation';
    } else if (type === 'success') {
      return 'fas fa-check';
    } else if (type === 'info') {
      return 'fas fa-info';
    }
  }

}
