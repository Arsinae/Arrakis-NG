import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {

  public htmlCode = ' <ar-input-file [multiple]="false" accept="image/*" (fileChange)="loadFile($event)"></ar-input-file>\n'
    + '<div class="img-container" *ngIf="img">\n  <img [src]="img">\n  <div class="img-title">{{ title }}</div>\n</div>\n';
  public tsCode = 'public img = null;\npublic title = null;\n\nloadFile(files: FileList) {\n  if (files.length > 0 && files[0].type.match(\'image/\')) {\n' 
    + '    this.title = files[0].name;\n    const fileReader = new FileReader();\n    fileReader.onload = ((res) => {\n      this.img = (<any>res.target).result;\n'
    + '    });\n    fileReader.readAsDataURL(files[0]);\n  }\n}\n';
  public explanations: Array<{title: string, explanation: string}> = [];
  public title: string = null;
  public img: any = null;

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-input-file'},
      {title: '@Input() label', explanation: 'Label de l\'input; String'},
      {title: '@Input() accept', explanation: 'Type de fichiers autorisés; String: \'\'(défaut)'},
      {title: '@Input() multiple', explanation: 'Accepte plusieurs fichiers; Boolean: false(défaut)'},
      {title: '@Output() fileChange', explanation: 'Evènement émis lorsque de nouveaux fichiers sont chargés; FileList'},
    ];
  }

  loadFile(files: FileList) {
    if (files.length > 0 && files[0].type.match('image/')) {
      this.title = files[0].name;
      const fileReader = new FileReader();
      fileReader.onload = ((res) => {
        this.img = (<any>res.target).result;
      });
      fileReader.readAsDataURL(files[0]);
    }
  }

}
