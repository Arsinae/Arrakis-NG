import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ar-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class ARPanelComponent implements OnInit, AfterViewInit, OnDestroy {


  @Output() stateChange = new EventEmitter<boolean>();

  @ViewChild('textContainer', {static: false}) textContainer: ElementRef;
  @ViewChild('textContent', {static: false}) textContent: ElementRef;

  private observer: MutationObserver = null;
  public open = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {});
    });
    this.observer.observe(this.textContent.nativeElement,  {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  changeState() {
    this.open = !this.open;
    this.stateChange.emit(this.open);
  }

  get ContainerHeight() {
    if (this.textContent && this.open) {
      return this.textContent.nativeElement.clientHeight;
    } else {
      return 0;
    }
  }

}
