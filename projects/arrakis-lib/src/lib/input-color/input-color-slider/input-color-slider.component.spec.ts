import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputColorSliderComponent } from './input-color-slider.component';

describe('InputColorSliderComponent', () => {
  let component: InputColorSliderComponent;
  let fixture: ComponentFixture<InputColorSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputColorSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputColorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
