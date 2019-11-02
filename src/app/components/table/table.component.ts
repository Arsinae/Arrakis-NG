import { Component, OnInit } from '@angular/core';
import { ARTableHeader, ARTableRow } from 'projects/arrakis-lib/src/public-api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public header: Array<ARTableHeader> = [
    {name: 'name', display: 'Nom'},
    {name: 'allegiance', display: 'Allégeance'},
    {name: 'origine', display: 'Origine'}
  ];
  public rows: Array<ARTableRow> = [
    {row: [{id: 'name', value: 'Darwi Odrade'}, {id: 'allegiance', value: 'Bene Gesserit'}, {id: 'origine', value: 'Gammu'}], color: '4'},
    {row: [{id: 'name', value: 'Duncan Idaho'}, {id: 'allegiance', value: 'Maison Atréides'}, {id: 'origine', value: 'Giedi Prime'}]},
    {row: [{id: 'name', value: 'Liet Kynes'}, {id: 'allegiance', value: 'Fremen'}, {id: 'origine', value: 'Arrakis'}]}
  ]

  public htmlCode = '<ar-table [header]="header" [rows]="rows" [tableAnimation]="\'vertical\'" [color]="\'secondary\'"></ar-table>\n';
  public tsCode = 'public header: Array<ARTableHeader> = [\n  {name: \'name\', display: \'Nom\'},\n  ' +
    '{name: \'allegiance\', display: \'Allégeance\'},\n  {name: \'origine\', display: \'Origine\'}\n];\n' +
    'public row: Array<ARTableRow> = [\n  {row: [{id: \'name\', value: \'Darwi Odrade\'}, {id: \'allegiance\', value: \'Bene Gesserit\'},' +
    ' {id: \'origine\', value: \'Gammu\'}], color: \'4\'},\n  {row: [{id: \'name\', value: \'Duncan Idaho\'},' +
    ' {id: \'allegiance\', value: \'Maison Atréides\'}, {id: \'origine\', value: \'Giedi Prime\'}], color: \'primary\'}\n]\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-table'},
      {title: '@Input() header', explanation: 'Liste des en-têtes de la liste; Array<ARTableHeader>: [](défaut)'},
      {title: '@Input() rows', explanation: 'Liste des lignes du tableau; Array<ARTableRow>: [](défaut)'},
      {title: '@Input() tableAnimation', explanation: 'Animation d\'entrée et de sortie des lignes; String: \'vertical\'(défaut), \'horizontal\''},
      {title: '@Input() color', explanation: 'Couleur par défaut des lignes; String: null(défaut), primary, secondary, 1-7'},
      {title: 'Classe ARTableHeader', explanation: '{name, display}'},
      {title: 'Classe ARTableRow', explanation: '{row: Array<{id, value}>, color}'},
    ]
  }

  addLine() {
    this.rows.push({row: [{id: 'name', value: 'Wellington Sueh'}, {id: 'allegiance', value: 'Ecole Suk'}, {id: 'origine', value: 'Caladan'}]});
  }

  deleteLine() {
    if (this.rows.length > 0) {
      this.rows.pop();
    }
  }

}
