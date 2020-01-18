import { Component, OnInit } from '@angular/core';
import { Theme } from './theme.class';
import { CssWriterService } from './css-writer.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public displayTheme: string = 'dune';
  public theme: Theme = new Theme();

  constructor(
    private cssWriter: CssWriterService
  ) { }

  ngOnInit() {
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

}
