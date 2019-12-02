import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: ARInputComponent;
  let fixture: ComponentFixture<ARInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
