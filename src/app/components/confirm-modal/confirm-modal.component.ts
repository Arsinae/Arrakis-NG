import { Component, OnInit, ViewChild } from '@angular/core';
import { ARModalComponent } from 'projects/arrakis-lib/src/lib/modal/modal.component';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal: ARModalComponent;

  public htmlCode = '<ar-confirm-modal #modal [acceptText]="\'Valider\'">\n  <div>\n    Contenu de la modal\n  </div>\n</ar-confirm-modal>\n\n<div (click)="openModal()">Ouvrir la modal</div>';
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
      {title: '@Input() acceptText', explanation: 'Texte du bouton de validation; String: \'Accept\'(défaut)'},
      {title: '@Input() cancelText', explanation: 'Texte du bouton d\'annulation; String: \'Cancel\'(défaut)'},
      {title: '@Output() closedModal', explanation: 'Evènement émis lors de la fermeture de la modal'},
      {title: '@Output() acceptModal', explanation: 'Evènement émis lors du clic sur le bouton de validation de la modal'},
      {title: '@Output() cancelModal', explanation: 'Evènement émis lors du clic sur le bouton d\'annulation de la modal'}
    ]
  }

  openModal() {
    this.modal.openModal();
  }

  console() {
    console.log('Click on Modal');
  }

}
