import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-background',
  templateUrl: './fixed-background.component.html',
  styleUrls: ['./fixed-background.component.scss']
})
export class FixedBackgroundComponent implements OnInit {

  public htmlCode = '<div class="background-container">\n  <ar-fixed-background [image]="\'assets/imgs/arrakis.jpg\'"></ar-fixed-background>\n  ' +
    '<div class="background-text">Bienvenue sur Arrakis</div>\n</div>\n';
  public cssCode = '.background-container {\n  width: 100%;  height: 50vh;\n  margin: 6px 0;\n  position: relative;\n\n  ' +
    '.background-text {\n    position: absolute;\n    top: 5%;    right: 5%;\n    max-width: 40%;\n    font-size: 5vw;\n    ' +
    'text-align: end;\n    color: white;\n    text-shadow: 1px 1px 6px black, 0 0 3px black;\n  }\n}';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-fixed-background'},
      {title: '@Input() image', explanation: 'Source de l\'image du fond; String'},
      {title: '@Input() position', explanation: 'Position de l\'image de fond; String: center(défaut), left, right'}
    ]
  }

}
