import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideCssCompComponent } from './inside-css-comp.component';

describe('InsideCssCompComponent', () => {
  let component: InsideCssCompComponent;
  let fixture: ComponentFixture<InsideCssCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideCssCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideCssCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
