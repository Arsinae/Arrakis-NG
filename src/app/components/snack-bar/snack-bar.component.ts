import { Component, OnInit } from '@angular/core';
import { ARSnackBarService } from 'projects/arrakis-lib/src/lib/snack-bar/snack-bar.service';
import { ARSnackBar } from 'projects/arrakis-lib/src/lib/snack-bar/snack-bar.class';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  public htmlCode = '<ar-card [shadow]=\"\'shadow\'\" [radius]=\"\'rounded\'\">\n  <div>\n    Une carte\n  </div>\n</ar-card>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor(private snackBarService: ARSnackBarService) { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-snack-bar'},
      {title: 'Contenu', explanation: 'Le contenu de la carte'},
      {title: '@Input() shadow', explanation: 'L\'ombre de la carte; String: "shadow"(défaut), "small-shadow" ou "big-shadow"'},
      {title: '@Input() rounded', explanation: 'Les coins arrondis de la carte; Boolean: true(défaut)'}
    ]
  }

  addSnackBar(type: string, title: string, text: string, timer = null) {
    const snackBar = new ARSnackBar(type, title, text, timer);
    this.snackBarService.addSnackBar(snackBar);
  }

}
