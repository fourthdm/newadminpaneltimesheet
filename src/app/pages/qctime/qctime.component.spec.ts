import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QctimeComponent } from './qctime.component';

describe('QctimeComponent', () => {
  let component: QctimeComponent;
  let fixture: ComponentFixture<QctimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QctimeComponent]
    });
    fixture = TestBed.createComponent(QctimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
