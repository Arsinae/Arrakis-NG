import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  public htmlCode = '<ar-accordion>\n  <ar-panel *ngFor="let panel of panels">\n    <div #title>{{ panel.title }}</div>\n' +
  '    <div>{{ panel.text }}</div>\n  <ar-panel>\n</ar-accordion>\n';
  public tsCode = 'public panels: Array<{title: string, text: string}> = [\n  {title: "House Atréides", text: "One of the Great Houses ..."},\n' +
  '  {title: "House Harkonnen", text: "The Harkonnens are featured ..."},\n  {title: "House Corrino", text: "Imperial House Corrino is a ..."}\n]\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-accordion'},
      {title: '@Input() autoClose', explanation: 'Fermeture automatique des panneaux lors de l\'ouverture d\'un autre; Boolean: true(défaut)'},
      {title: 'Contenu', explanation: 'Liste de panneaux (ar-panel)'},
      {title: '', explanation: ''},
      {title: 'Balise HTML', explanation: 'ar-panel'},
      {title: '@Output() stateChange', explanation: 'Emission d\'évènement lors du clic sur le panneau qui entraîne un changement d\'état'},
      {title: 'Contenu title', explanation: 'En-tête du panneau'},
      {title: 'Contenu', explanation: 'Contenu du panneau'},
    ]
  }

}
