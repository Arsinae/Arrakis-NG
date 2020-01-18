import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { ARScrollSpyService } from 'projects/arrakis-lib/src/lib/scroll-spy/scroll-spy.service';

@Component({
  selector: 'arr-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('componentList', {static: false}) componentList: ElementRef;

  public theme = 'dune';
  public components: Array<{name: string, id: string}> = [];
  public isFixed: boolean = false;
  public currentSelected = null;
  private scrollSpy = null;

  constructor(private navSpyService: ARScrollSpyService) { }

  ngOnInit() {
    this.components = [
      {name: 'Carte', id: 'card'},
      {name: 'Carte Retournable', id: 'flipping-card'},
      {name: 'Carte de Présentation', id: 'testimonial-card'},
      {name: 'Image de Fond Fixée', id: 'fixed-background'},
      {name: 'Tableau', id: 'table'},
      {name: 'Accordéon', id: 'accordion'},
      {name: 'Tabs', id: 'tabs'},
      {name: 'Carousel', id: 'carousel'},
      {name: 'Modal', id: 'modal'},
      {name: 'Modal de Confirmation', id: 'confirm-modal'},
      {name: 'Alerte', id: 'alert'},
      {name: 'SnackBar', id: 'snack-bar'},
      {name: 'Tooltip', id: 'tooltip'},
      {name: 'Bread Crumbs', id: 'breadcrumbs'},
      {name: 'Barre de Progression', id: 'progress-bar'},
      {name: 'Notation', id: 'notation'},
      {name: 'Input', id: 'input'},
      {name: 'Input Number', id: 'input-number'},
      {name: 'Input File', id: 'input-file'},
      {name: 'Input Autocomplete', id: 'input-autocomplete'},
      {name: 'Input Color', id: 'input-color'},
      {name: 'Select', id: 'select'},
      {name: 'Zone de Texte', id: 'textarea'},
      {name: 'Editeur de Texte', id: 'text-editor'},
      {name: 'Bouton', id: 'button'},
      {name: 'Bouton Switch', id: 'switch'},
      {name: 'Boites à cocher', id: 'check-box'},
      {name: 'Boutons radio', id: 'radio-button'},
      {name: 'Service de surveillance', id: 'scroll-spy'}
    ]
  }

  ngAfterViewInit() {
    this.createNavSpy();
    this.setFixed();
  }

  ngOnDestroy() {
    this.navSpyService.unsubscribe(this.scrollSpy);
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

  createNavSpy() {
    this.scrollSpy = this.navSpyService.createNavSpy(this.componentList.nativeElement, 1).subscribe(element => {
      if (element) {
        this.currentSelected = element.id;
      }
    })
  }

  setFixed() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    });
  }

  scrollToElement(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
