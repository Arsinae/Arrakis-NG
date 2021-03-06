import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'ar-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class ARInputAutocompleteComponent implements OnInit {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() color = 'primary';
  @Input() disabled = false;
  @Input() completeValues: Array<string> = [];
  @Input() noMatchingText = 'Aucune valeur correspondante';

  @Output() valueChange = new EventEmitter<any>();
  @Output() pressEnter = new EventEmitter<any>();

  @ViewChild('input', {static: false}) input;

  public focus = false;
  public dark = false;

  constructor() { }

  ngOnInit() {
    this.focus = (this.value === '' || this.value === null) ? false : true;
  }

  ngOnChanges(changes) {
    this.focus = (this.value === '' || this.value === null) ? false : true;
  }

  changeFocus() {
    this.input.nativeElement.focus();
  }

  changeValue(event) {
    this.value = event;
    this.valueChange.emit(event);
  }

  pressKey(event) {
    if (event.keyCode === 13) {
      this.pressEnter.emit();
    }
  }

  focusInput() {
    this.focus = true;
  }

  unfocusInput() {
    setTimeout(() => {
      this.focus = false;
    }, 200);
  }

  getMatchingValues() {
    const matching = [], levensthein = [];
    for (const value of this.completeValues) {
      if (value.toLowerCase().match(this.value.toLowerCase())) {
        matching.push(value);
      } else if (this.levenshteinDistance(this.value.toLowerCase(), value.toLowerCase()) <= value.length / 2) {
        levensthein.push(value);
      }
    }
    return matching.concat(levensthein);
  }

  levenshteinDistance (a: string, b: string): number {
    const m = [], min = Math.min;

    if (!(a && b)) {
      return (b || a).length;
    }
    for (let i = 0; i <= b.length; m[i] = [i++]) {}
    for (let j = 0; j <= a.length; m[0][j] = j++) {}

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
        m[i][j] = m[i - 1][j - 1];
        } else {
        m[i][j] = m[i][j] = min(m[i - 1][j - 1] + 1, min(m[i][j - 1] + 1, m[i - 1 ][j] + 1));
        }
      }
    }
    return m[b.length][a.length];
  }

  clickValue(value) {
    this.value = value;
    this.valueChange.emit(value);
    this.focus = false;
  }

}
