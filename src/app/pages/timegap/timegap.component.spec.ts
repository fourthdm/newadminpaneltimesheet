import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimegapComponent } from './timegap.component';

describe('TimegapComponent', () => {
  let component: TimegapComponent;
  let fixture: ComponentFixture<TimegapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimegapComponent]
    });
    fixture = TestBed.createComponent(TimegapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
