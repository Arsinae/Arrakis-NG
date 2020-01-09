import { Component, OnInit } from '@angular/core';
import { ARBreadcrumbElement } from 'projects/arrakis-lib/src/public-api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public htmlCode = '<ar-breadcrumb [breadcrumbs]="breadcrumbs"></ar-breadcrumb>';
  public tsCode = 'public crumbs: Array<ARBreadcrumbElement> = [\n  {text: \'Arrakis\', link: \'arrakis\'},\n  ' +
    '{text: \'Atréides\', link: \'atreides\'},\n  {text: \'Leto Atréides\', link: \'leto1\'}\n]\n'
  public explanations: Array<{title: string, explanation: string}> = [];

  public breadcrumbs: ARBreadcrumbElement[] = [
    {text: 'Arrakis', link: 'arrakis'},
    {text: 'Atréides', link: 'atreides'},
    {text: 'Leto Atréides', link: 'leto1'}
  ];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-breadcrumb'},
      {title: 'Classe ARBreadcrumbElement', explanation: '{text: string, link: string}'},
      {title: '@Input() breadcrumbs', explanation: 'Elements du Breadcrumbs; Array<ARBreadcrumbElement>'},
      {title: '@Input() color', explanation: 'Couleur du texte; String: primary(défaut), secondary, 1-7'},
      {title: '@Output() linkSelected', explanation: 'Evenement émis lors du clic sur un élément du Breadcrumb'}
    ];
  }
}
