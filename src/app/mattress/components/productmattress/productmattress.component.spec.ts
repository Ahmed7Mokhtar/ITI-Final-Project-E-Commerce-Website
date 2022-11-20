import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmattressComponent } from './productmattress.component';

describe('ProductmattressComponent', () => {
  let component: ProductmattressComponent;
  let fixture: ComponentFixture<ProductmattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmattressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
