import { Component, OnInit } from '@angular/core';
import { ARAlertService, ARAlert } from 'projects/arrakis-lib/src/public-api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public htmlCode = '<ar-alert></ar-alert> // One time in the application\n';
  public tsCode = 'constructor(private alertService: ARAlertService) {\n}\n\n' +
    'addAlert(type: string, title: string, text: string, timer: number) {\n' +
    '  const alert = new ARSnackBar(type, title, text, timer);\n  this.alertService.addAlert(alert);\n}\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor(private alertService: ARAlertService) { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-alert'},
      {title: '@Input() timer', explanation: 'Temps par défaut d\'affichage des alertes; Number: 5000(défaut)'},
      {title: 'Classe ARAlert', explanation: '{type, title, text, timer}'},
      {title: 'Type d\'alerte', explanation: '\'danger\'(défaut), \'warning\', \'info\', \'success\''},
      {title: 'Service ARAlertService', explanation: 'Fonction addAlert(ARAlert); Affiche une alerte'}
    ]
  }

  addAlert(type: string, title: string, text: string, timer = null) {
    const alert = new ARAlert(type, title, text, timer);
    this.alertService.addAlert(alert);
  }

}
