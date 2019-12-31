import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef,  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ar-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class ARTextEditorComponent implements OnInit {

  @Input() text: string = '';
  @Input() height: number = 200;
  @Input() color: string = 'primary';

  @Output() textChange: EventEmitter<string> = new EventEmitter();
  @Output() getSelection: EventEmitter<string> = new EventEmitter();

  @ViewChild('textEditor', {static: false}) textArea;

  public textTmp;
  public size = 13;
  public dark = false;

  constructor(
    private sanitize: DomSanitizer,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cd.detach();
  }

  ngOnChanges(changes) {
    if (changes.text) {
      if (changes.text.currentValue !== this.textTmp) {
        this.textTmp = this.sanitize.bypassSecurityTrustHtml(this.text.slice());
        this.cd.detectChanges();
      }
    } else {
      this.cd.detectChanges();
    }
  }

  addTextStyle(style) {
    const selection = this.saveSelection();
    document.execCommand(style, false, '');
    this.textChange.emit(this.textArea.nativeElement.innerHTML);
    this.restoreSelection(selection);
  }

  changeFontSize() {
    const selection = this.saveSelection();
    document.execCommand('fontSize', false, '7');
    const fontElements = this.textArea.nativeElement.getElementsByTagName('font');
    for (let i = 0, len = fontElements.length; i < len; ++i) {
      if (fontElements[i].attributes.getNamedItem('size')) {
        fontElements[i].removeAttribute('size');
        fontElements[i].style.fontSize = this.size + 'px';
      }
    }
    this.textTmp = this.textArea.nativeElement.innerHTML;
    this.textChange.emit(this.textArea.nativeElement.innerHTML);
    this.restoreSelection(selection);
  }

  pushText() {
    this.textTmp = this.textArea.nativeElement.innerHTML;
    this.textChange.emit(this.textArea.nativeElement.innerHTML);
  }

  handleSelection(event) {
    if (event.view.getSelection().type === 'Range')   {
      this.getSelection.emit(event.view.getSelection().toString());
    }
  }

  saveSelection() {
    if (window.getSelection) {
      let sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0);
      }
    } else if (document['selection'] && document['selection'].createRange) {
      return document['selection'].createRange();
    }
    return null;
  }

  restoreSelection(range) {
    if (range) {
      if (window.getSelection) {
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (document['selection'] && range.select) {
        range.select();
      }
    }
  }

}
