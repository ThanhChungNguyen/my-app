import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverCssThoughComponentComponent } from './hover-css-though-component.component';

describe('HoverCssThoughComponentComponent', () => {
  let component: HoverCssThoughComponentComponent;
  let fixture: ComponentFixture<HoverCssThoughComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverCssThoughComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverCssThoughComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
