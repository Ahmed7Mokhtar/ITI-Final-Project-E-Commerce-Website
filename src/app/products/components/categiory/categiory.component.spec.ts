import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategioryComponent } from './categiory.component';

describe('CategioryComponent', () => {
  let component: CategioryComponent;
  let fixture: ComponentFixture<CategioryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategioryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategioryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
