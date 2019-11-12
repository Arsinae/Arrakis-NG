import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public htmlCode = ' <ar-progress-bar color="gradient1"></ar-progress-bar>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-progress-bar'},
      {title: '@Input() progress', explanation: 'Progression affichée dans la barre en pourcentage; Number: 50(défaut)'},
      {title: '@Input() color', explanation: 'Couleur par défaut des lignes; String: primary(défaut), secondary, 1-7, gradient1-4'},
      {title: '@Input() height', explanation: 'Hauteur de la barre; Number: 15(défaut)'},
      {title: '@Input() padding', explanation: 'Padding de la barre; Number: 3(défaut)'},
      {title: '@Input() display', explanation: 'Affichage de la progression dans la barre; Boolean: false(défaut)'}
    ];
  }

}
