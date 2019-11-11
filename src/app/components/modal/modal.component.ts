import { Component, OnInit, ViewChild } from '@angular/core';
import { ARModalComponent } from 'projects/arrakis-lib/src/public-api';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal: ARModalComponent;

  public htmlCode = '<ar-modal #modal>\n  <div>\n    Contenu de la modal\n  </div>\n</ar-modal>\n\n<div (click)="openModal()">Ouvrir la modal</div>';
  public tsCode = '@ViewChild(\'modal\', {static: false}) modal: ARModalComponent;\n\n' +
    'openModal() {\n  this.modal.openModal();\n}\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-modal'},
      {title: 'Content', explanation: 'Contenu de la Modal'},
      {title: '@Input() width', explanation: 'Largeur de la modal en pourcentage; Number: 50(défaut)'},
      {title: '@Input() maxHeight', explanation: 'Hauteur maximale de la modal en pourcentage; Number: 80(défaut)'},
      {title: '@Output() closedModal', explanation: 'Evènement émis lors de la fermeture de la modal'}
    ]
  }

  openModal() {
    this.modal.openModal();
  }

  console() {
    console.log('Click on Modal');
  }

}
