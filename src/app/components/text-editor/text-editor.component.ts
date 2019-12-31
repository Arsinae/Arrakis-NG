import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  public htmlCode = ' <ar-text-editor color="secondary" [(text)]="text"></ar-text-editor>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-text-editor'},
      {title: '@Input() text', explanation: 'Texte de l\'éditeur; String'},
      {title: '@Input() color', explanation: 'Couleur par défaut de l\'entête; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() height', explanation: 'Hauteur de l\'éditeur; Number: 200(défaut)'},
      {title: '@Output() textChange', explanation: 'Evènement émis lors du changement de valeur de l\'éditeur; String'},
      {title: '@Output() getSelection', explanation: 'Evènement émis lors de la séléction dans l\'éditeur; String'},
    ];
  }

}
