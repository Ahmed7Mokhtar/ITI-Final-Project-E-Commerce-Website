import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPolicyComponent } from './sales-policy.component';

describe('SalesPolicyComponent', () => {
  let component: SalesPolicyComponent;
  let fixture: ComponentFixture<SalesPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
