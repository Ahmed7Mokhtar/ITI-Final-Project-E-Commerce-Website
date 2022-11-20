import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductelectronicComponent } from './productelectronic.component';

describe('ProductelectronicComponent', () => {
  let component: ProductelectronicComponent;
  let fixture: ComponentFixture<ProductelectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductelectronicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductelectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
