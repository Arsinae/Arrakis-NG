import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public htmlCode = ' <ar-input color="secondary" [(value)]="character" placeholder="Nommez votre personnage préféré"></ar-input>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-input'},
      {title: '@Input() value', explanation: 'Valeur de l\'input; String'},
      {title: '@Input() placeholder', explanation: 'Placeholder de l\'input; String'},
      {title: '@Input() color', explanation: 'Couleur par défaut des lignes; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() type', explanation: 'Type de l\'input; String: text(défaut), mail, password, ...'},
      {title: '@Input() disabled', explanation: 'Désactiver l\'input; Boolean: false(défaut)'},
      {title: '@Output() valueChange', explanation: 'Evènement émis lors du changement de valeur de l\'input; String'},
      {title: '@Output() pressEnter', explanation: 'Evènement émis lors d\'un appui sur la touche "Entrée"; Null'},
    ];
  }

}
