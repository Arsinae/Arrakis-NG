import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  public htmlCode = '<ar-switch [(checked)]="check" color="3" size="large"></ar-switch>\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-input'},
      {title: '@Input() checked', explanation: 'Valeur du bouton Switch; Boolean'},
      {title: '@Input() color', explanation: 'Couleur par défaut du bouton; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() size', explanation: 'Taille du bouton; String: medium(défaut), large'},
      {title: '@Output() checkedChange', explanation: 'Evènement émis lors du changement de valeur du bouton Switch; Boolean'},
    ];
  }

  change(event) {
    console.log(event);
  }

}
