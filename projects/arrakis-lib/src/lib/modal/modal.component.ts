import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ARModalComponent implements OnInit {

  @Input() width = 50;
  @Input() maxHeight = 80;

  @Output() closedModal: EventEmitter<any> = new EventEmitter();

  private open = false;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
    this.closedModal.emit();
  }

  isOpen() {
    return this.open;
  }

  clickOnModal(event) {
    event.preventDefault();
    event.stopPropagation();
  }

}
