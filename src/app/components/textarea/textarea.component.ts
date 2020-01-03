import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  public htmlCode = ' <ar-textarea color="warning" [(value)]="text"></ar-textarea>';
  public explanations: Array<{title: string, explanation: string}> = [];

  public text = '';

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-text-editor'},
      {title: '@Input() value', explanation: 'Valeur de la zone de texte; String'},
      {title: '@Input() color', explanation: 'Couleur par défaut de l\'entête; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() lines', explanation: 'Nombre de ligne par défaut; Number: 5(défaut)'},
      {title: '@Input() resisable', explanation: 'Permet de changer la taille de la zone de texte; Boolean: true(défaut)'},
      {title: '@Input() disabled', explanation: 'Désactive la zone de texte; Boolean: false(défaut)'},
      {title: '@Output() valueChange', explanation: 'Evènement émis lors du changement de valeur de la zone de texte; String'},
    ];
  }

}
