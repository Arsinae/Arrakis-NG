import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class ARInputFileComponent implements OnInit {

  @Input() label = 'Importer un fichier';
  @Input() accept = '';
  @Input() multiple = false;

  public files: FileList = null;

  @Output() fileChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue(ev) {
    if (ev.target.files && ev.target.files.length > 0) {
      this.files = ev.target.files;
      this.fileChange.emit(this.files);
    }
  }
}
