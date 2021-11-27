import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFormulariosComponent } from './slider-formularios.component';

describe('SliderFormulariosComponent', () => {
  let component: SliderFormulariosComponent;
  let fixture: ComponentFixture<SliderFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
