import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent implements OnInit {

  public htmlCode = '<ar-input-autocomplete color="3" placeholder="Premier Input" [(value)]="value" [completeValues]="values"></ar-input-autocomplete>';
  public tsCode = 'public values: Array<string> = [\'Arrakis\', \'Caladan\', \'Giedi Prime\'];\npublic value = \'Arrakis\';\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  public values: Array<string> = ['Arrakis', 'Caladan', 'Giedi Prime'];
  public value = 'Arrakis';

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-input-autocomplete'},
      {title: '@Input() value', explanation: 'Valeur de l\'input; String'},
      {title: '@Input() placeholder', explanation: 'Placeholder de l\'input; String'},
      {title: '@Input() color', explanation: 'Couleur par défaut des lignes; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() completeValues', explanation: 'Valeurs proposées par l\'input; Array<String>'},
      {title: '@Input() disabled', explanation: 'Désactiver l\'input; Boolean: false(défaut)'},
      {title: '@Input() noMatchingText', explanation: 'Texte à afficher lorsqu\'aucune valeur proposée correspond à l\'entrée; String: \'Aucune valeur correspondante\'(défaut)'},
      {title: '@Output() valueChange', explanation: 'Evènement émis lors du changement de valeur de l\'input; String'},
      {title: '@Output() pressEnter', explanation: 'Evènement émis lors d\'un appui sur la touche "Entrée"; Null'},
    ];
  }

}
