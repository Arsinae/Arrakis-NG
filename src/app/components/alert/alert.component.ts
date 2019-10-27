import { Component, OnInit } from '@angular/core';
import { ARAlertService, ARAlert } from 'projects/arrakis-lib/src/public-api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public htmlCode = '<ar-card [shadow]=\"\'shadow\'\" [radius]=\"\'rounded\'\">\n  <div>\n    Une carte\n  </div>\n</ar-card>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor(private alertService: ARAlertService) { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-alert'},
      {title: 'Contenu', explanation: 'Le contenu de la carte'},
      {title: '@Input() shadow', explanation: 'L\'ombre de la carte; String: "shadow"(défaut), "small-shadow" ou "big-shadow"'},
      {title: '@Input() rounded', explanation: 'Les coins arrondis de la carte; Boolean: true(défaut)'}
    ]
  }

  addAlert(type: string, title: string, text: string, timer = null) {
    const alert = new ARAlert(type, title, text, timer);
    this.alertService.addAlert(alert);
  }

}
