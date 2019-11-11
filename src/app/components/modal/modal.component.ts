import { Component, OnInit, ViewChild } from '@angular/core';
import { ARModalComponent } from 'projects/arrakis-lib/src/public-api';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal: ARModalComponent;

  public htmlCode = '<ar-snack-bar></ar-snack-bar> // One time in the application\n';
  public tsCode = 'constructor(private snackBarService: ARSnackBarService) {\n}\n\n' +
    'addSnackBar(type: string, title: string, text: string, timer: number) {\n' +
    '  const snackBar = new ARSnackBar(type, title, text, timer);\n  this.snackBarService.addSnackBar(snackBar);\n}\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modal.openModal();
  }

  console() {
    console.log('Click on Modal');
  }

}
