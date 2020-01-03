import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arr-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  public theme = 'dune';

  constructor() { }

  ngOnInit() {
  }

  changeTheme() {
    this.theme = (this.theme === 'dune') ? 'arrakis' : 'dune';
    const oldlink = document.getElementsByTagName("link").item(1);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", `assets/themes/${this.theme}-theme.css`);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  }

}
