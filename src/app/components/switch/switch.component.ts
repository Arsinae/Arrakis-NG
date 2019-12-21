import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  public htmlCode = '<ar-switch [(checked)]="check" color="3"></ar-switch>\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-input'},
      {title: '@Input() checked', explanation: 'Valeur du bouton Switch; Boolean'},
      {title: '@Input() color', explanation: 'Couleur par défaut des lignes; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Output() checkedChange', explanation: 'Evènement émis lors du changement de valeur du bouton Switch; Boolean'},
    ];
  }

  change(event) {
    console.log(event);
  }

}
