import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrls: ['./scroll-spy.component.scss']
})
export class ScrollSpyComponent implements OnInit {

  public htmlCode = '<div #container>\n  <div>\n    <div>A</div>\n    <div>B</div>\n    <div>C</div>\n  </div>\n  <div>D</div>\n  <div>E</div>\n</div>\n';
  public tsCode = '@ViewChild(\'container\', {static: false}) container: ElementRef;\npublic scrollSpy = null;\n\ncontructor(private scrollServicce: ARScrollSpyService) { }\n\n' +
    'ngAfterViewInit() {\n  this.createNavSpy();\n}\n\nngOnDestroy() {\n  this.scrollService.unsubscribe(this.scrollSpy);\n}\n\n' +
    'createNavSpy() {\n  this.scrollSpy = this.scrollService.createNavSpy(this.container.nativeElement, 2);\n' +
    '    this.scrollSpy.subscribe(element => {\n      console.log(element);\n    }\n  })\n}\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Service', explanation: 'ARScrollSpyService'},
      {title: 'Fonction createNavSpy (element: Element, profondeur: number): Observable<Element>', explanation: 'Créé une surveillance sur les éléments internes'},
      {title: 'Fonction unsubscribe (subscription)', explanation: 'Supprime une surveillance'}
    ]
  }

}
