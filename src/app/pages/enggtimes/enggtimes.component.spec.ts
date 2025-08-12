import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggtimesComponent } from './enggtimes.component';

describe('EnggtimesComponent', () => {
  let component: EnggtimesComponent;
  let fixture: ComponentFixture<EnggtimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnggtimesComponent]
    });
    fixture = TestBed.createComponent(EnggtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
