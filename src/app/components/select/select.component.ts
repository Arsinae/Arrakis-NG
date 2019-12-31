import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public htmlCode = '<ar-select color="2" placeholder="Quelle planète choisir?" [(value)]="value">\n  ' +
    '<ar-select-option *ngFor="let option of options" [text]="option.text" [value]="option.value"></ar-select-option>\n</ar-select>\n';
  public tsCode = 'public options: Array<{text: string, value: string}> = [\n  {text: \'Arrakis\', option: \'arrakis\'},\n  ' +
    '{text: \'Caladan\', value: \'caladan\'},\n  {text: \'Giedi Prime\', value: \'giedi-prime\'}\n];\n\npublic value: string = \'\'\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  public value = '';

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-select'},
      {title: '@Input() value', explanation: 'Valeur de l\'input de sélection; String: \'\'(défaut)'},
      {title: '@Input() placeholder', explanation: 'Placeholder de l\'input de sélection; String: \'\'(défaut)'},
      {title: '@Input() color', explanation: 'Couleur de l\'input; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Output() valueChange', explanation: 'Emission d\'évènement lors du clic sur une option; String'},
      {title: 'Contenu', explanation: 'Liste des options (ar-select-option)'},
      {title: '', explanation: ''},
      {title: 'Balise HTML', explanation: 'ar-select-option'},
      {title: '@Input() text', explanation: 'Texte de l\'option; String: \'\'(défaut)'},
      {title: '@Input() value', explanation: 'Valeur de l\'option; String: \'\'(défaut)'},
      {title: '@Output() valueChange', explanation: 'Emission d\'évènement lors du clic sur l\'option; String'},
    ];
  }

}
