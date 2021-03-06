import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Theme } from './theme.class';
import { CssWriterService } from './css-writer.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit, AfterViewInit {

  public displayTheme: string = 'dune';
  public theme: Theme = new Theme();
  public cssLink = '<link href="arrakis-component/themes/dune-theme.css" rel="stylesheet">';
  public isFixed: boolean = false;

  public htmlModify = '<div>\n  <ar-testimonial-card [headerHeight]="100" color="1" imageSize="75" imageSrc="assets/imgs/caladan.jpg">\n    <div>Caladan</div>\n  </ar-testimonial-card>\n</div>\n\n' +
  '<div id="change-color">  <ar-testimonial-card [headerHeight]="100" color="1" imageSize="75" imageSrc="assets/imgs/caladan.jpg">\n    <div>Caladan</div>\n  </ar-testimonial-card>\n</div>\n';
  public cssModify = '#change-color {\n  --ar-color1: var(--ar-primary);\n}\n';

  constructor(
    private cssWriter: CssWriterService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setFixed();
  }

  changeTheme() {
    this.displayTheme = (this.displayTheme === 'dune') ? 'arrakis' : 'dune';
    const oldlink = document.getElementsByTagName("link").item(1);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", `assets/themes/${this.displayTheme}-theme.css`);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  }

  scrollToElement(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  getCssFile() {
    const data = this.cssWriter.writeCssVariable(this.theme) +
      this.cssWriter.writeColor('.ar-color-', '') + this.cssWriter.writeColor('.ar-color-', '-hover:hover') +
      this.cssWriter.writeBackgroundColor('.ar-background-color-', '') + this.cssWriter.writeBackgroundColor('.ar-background-color-', '-hover:hover') +
      this.cssWriter.writeBorderColor('.ar-border-color-') + this.cssWriter.writeInputColor('.ar-input-color-') + this.cssWriter.writeShadowClass();
  }

  get CssVariables() {
    return this.cssWriter.writeCssVariable(this.theme);
  }

  downloadTheme(filename) {
    let data = this.cssWriter.writeCssVariable(this.theme);
    data += this.cssWriter.writeColor('.ar-color-', '') + this.cssWriter.writeColor('.ar-color-', '-hover:hover');
    data += this.cssWriter.writeBackgroundColor('.ar-background-color-', '') + this.cssWriter.writeBackgroundColor('.ar-background-color-', '-hover:hover');
    data += this.cssWriter.writeBorderColor('.ar-border-color-') + this.cssWriter.writeInputColor('.ar-input-color-') + this.cssWriter.writeShadowClass();
    const file = new Blob([data], {type: 'text/css'});
    const a = document.createElement("a"), url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);  
    }, 0); 
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

}
