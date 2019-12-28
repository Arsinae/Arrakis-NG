import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public htmlCode = '<ar-tabs>\n  <ar-tab *ngFor="let tab of tabs" [title]="tab.title">\n    <div>{{ tab.text }}</div>\n  </ar-tab>\n</ar-tabs>\n';
  public tsCode = 'public tabs: Array<{title: string, text: string}> = [\n  {title: \'House Atréides\', text: \'...\'},\n  ...\n]\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-tabs'},
      {title: '@Input() displayedTitleNumber', explanation: 'Nombre d\'index a afficher dans l\'entête; Number: 5(défaut)'},
      {title: '@Input() color', explanation: 'Couleur par défaut du texte de l\'entête; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() displayedIndex', explanation: 'Index afficher dans les \'tabs\'; Number: 0(défaut)'},
      {title: '@Output() displayedIndexChange', explanation: 'Emission d\'évènement lors d\'un changement d\'index des tabs'},
      {title: 'Contenu', explanation: 'Liste de tab (ar-tab)'},
      {title: '', explanation: ''},
      {title: 'Balise HTML', explanation: 'ar-tab'},
      {title: '@Input() title', explanation: 'Titre de l\'entête; String: \'\'(défaut)'},
      {title: '@Output() displayChange', explanation: 'Emission d\'évènement lors du changement d\'état de la tab; {index: Number, state: Boolean}'},
    ];
  }

}
