import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddReactiveForm2Component } from './product-add-reactive-form2.component';

describe('ProductAddReactiveForm2Component', () => {
  let component: ProductAddReactiveForm2Component;
  let fixture: ComponentFixture<ProductAddReactiveForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddReactiveForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddReactiveForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
