import { Component, OnInit } from '@angular/core';
import { ARSnackBarService } from 'projects/arrakis-lib/src/lib/snack-bar/snack-bar.service';
import { ARSnackBar } from 'projects/arrakis-lib/src/lib/snack-bar/snack-bar.class';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  public htmlCode = '<ar-snack-bar></ar-snack-bar> // One time in the application\n';
  public tsCode = 'constructor(private snackBarService: ARSnackBarService) {\n}\n\n' +
    'addSnackBar(type: string, title: string, text: string, timer: number) {\n' +
    '  const snackBar = new ARSnackBar(type, title, text, timer);\n  this.snackBarService.addSnackBar(snackBar);\n}\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor(private snackBarService: ARSnackBarService) { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-snack-bar'},
      {title: '@Input() timer', explanation: 'Temps par défaut d\'affichage des snackbars; Number: 5000(défaut)'},
      {title: 'Classe ARSnackBar', explanation: '{type, title, text, timer}'},
      {title: 'Type de snackbar', explanation: '\'danger\'(défaut), \'warning\', \'info\', \'success\''},
      {title: 'Service ARSnackBarService', explanation: 'Fonction addSnackBar(ARSnackBar); Affiche une snackbar'}
    ]
  }

  addSnackBar(type: string, title: string, text: string, timer = null) {
    const snackBar = new ARSnackBar(type, title, text, timer);
    this.snackBarService.addSnackBar(snackBar);
  }

}
