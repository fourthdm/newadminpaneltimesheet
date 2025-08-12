import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedjobsComponent } from './orderedjobs.component';

describe('OrderedjobsComponent', () => {
  let component: OrderedjobsComponent;
  let fixture: ComponentFixture<OrderedjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderedjobsComponent]
    });
    fixture = TestBed.createComponent(OrderedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
