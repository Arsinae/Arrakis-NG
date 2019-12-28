import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public htmlCode = '<ar-carousel>\n  <ar-carousel-box *ngFor="let box of boxes">\n    <div>{{ box }}</div>\n  </ar-carousel-box>\n</ar-carousel>\n';
  public tsCode = 'public boxes: Array<string> = [\'...\', ...]\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-carousel'},
      {title: '@Input() displayedIndex', explanation: 'Index afficher dans les \'tabs\'; Number: 0(défaut)'},
      {title: '@Input() color', explanation: 'Couleur par défaut du texte de l\'entête; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Input() height', explanation: 'Hauteur du carousel en pixel; Number: 250(défaut)'},
      {title: '@Input() timer', explanation: 'Temps de changement automatique de l\'index en millisecondes; Number: 3000(défaut), null pour désactiver'},
      {title: '@Input() stepper', explanation: 'Affiche un stepper au bas du carousel; Boolean: false(défaut)' },
      {title: '@Output() displayedIndexChange', explanation: 'Emission d\'évènement lors d\'un changement d\'index des tabs'},
      {title: 'Contenu', explanation: 'Liste de tab (ar-tab)'},
      {title: '', explanation: ''},
      {title: 'Balise HTML', explanation: 'ar-carousel-box'},
      {title: '@Output() displayChange', explanation: 'Emission d\'évènement lors du changement d\'état de la tab; {index: Number, state: Boolean}'},
    ];
  }

}
