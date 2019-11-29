import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  public htmlCode = '<ar-button color="success" display="outline" [rounded]="true"></ar-button>\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-button'},
      {title: '@Input() color', explanation: 'Couleur du bouton; String: primary(défaut), secondary, 1-7, gradient1-4, success, info, warning, danger'},
      {title: '@Input() size', explanation: 'Taille du padding du bouton; String: medium(défaut), small, big'},
      {title: '@Input() display', explanation: 'Type d\'affichage du bouton; String: inline(défaut) ou outline'},
      {title: '@Input() rounded', explanation: 'Bordure arrondie du bouton; Boolean: false(défaut)'},
    ]
  }

}
