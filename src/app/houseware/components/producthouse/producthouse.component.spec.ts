import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthouseComponent } from './producthouse.component';

describe('ProducthouseComponent', () => {
  let component: ProducthouseComponent;
  let fixture: ComponentFixture<ProducthouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducthouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
