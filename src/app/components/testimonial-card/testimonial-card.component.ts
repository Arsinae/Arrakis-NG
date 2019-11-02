import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  public htmlCode = '<ar-testimonial-card [headerHeight]="100" color="gradient3" imageSize="75" imageSrc="assets/imgs/caladan.jpg">\n' +
    '  <div>Caladan</div>\n</ar-testimonial-card>\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-testimonial-card'},
      {title: 'Contenu', explanation: 'Le contenu de la carte'},
      {title: '@Input() headerHeight', explanation: 'Hauteur de l\'en-tête de la carte en px; Number: 50(défaut)'},
      {title: '@Input() color', explanation: 'Couleur de l\'en-tête; String: primary(défaut), secondary, 1-7, gradient1-4'},
      {title: '@Input() imageSize', explanation: 'Taille de l\'image en px; Number: 50(défaut)'},
      {title: '@Input() imageSrc', explanation: 'Source de l\'image; String'},
      {title: '@Input() shadow', explanation: 'L\'ombre de la carte; String: "shadow"(défaut), "small-shadow" ou "big-shadow"'},
    ]
  }

}
