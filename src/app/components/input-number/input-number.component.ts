import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  
  public htmlCode = ' <ar-input-number display="single" color="danger" [increment]="2" [min]="-10" [max]="10"></ar-input-number>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-input-number'},
      {title: '@Input() value', explanation: 'Valeur de l\'input; Number'},
      {title: '@Input() label', explanation: 'Label de l\'input; String'},
      {title: '@Input() color', explanation: 'Couleur par défaut des lignes; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() display', explanation: 'Type de l\'affichage des incrémenteurs; String: both(défaut), single'},
      {title: '@Input() increment', explanation: 'Valeaur des incrémenteurs; Number: 1(défaut)'},
      {title: '@Input() min', explanation: 'Valeur minimale de l\'input; Number: null(défaut)'},
      {title: '@Input() max', explanation: 'Valeur maximale de l\'input; Number: null(défaut)'},
      {title: '@Input() disabled', explanation: 'Désactiver l\'input; Boolean: false(défaut)'},
      {title: '@Output() valueChange', explanation: 'Evènement émis lors du changement de valeur de l\'input; String'},
    ];
  }

}
