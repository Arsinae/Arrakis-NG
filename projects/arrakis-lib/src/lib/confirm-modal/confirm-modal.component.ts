import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ARConfirmModalComponent implements OnInit {

  @Input() width = 50;
  @Input() maxHeight = 80;
  @Input() acceptText = 'Accept';
  @Input() cancelText = 'Cancel';

  @Output() closedModal: EventEmitter<any> = new EventEmitter();
  @Output() cancelModal: EventEmitter<any> = new EventEmitter();
  @Output() acceptModal: EventEmitter<any> = new EventEmitter();

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

  clickOnModal(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  accept(event) {
    event.preventDefault();
    event.stopPropagation();
    this.acceptModal.emit(event);
    this.closeModal();
  }

  cancel(event) {
    event.preventDefault();
    event.stopPropagation();
    this.cancelModal.emit(event);
    this.closeModal();
  }

  isOpen() {
    return this.open;
  }

}
