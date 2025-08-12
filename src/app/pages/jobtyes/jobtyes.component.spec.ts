import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtyesComponent } from './jobtyes.component';

describe('JobtyesComponent', () => {
  let component: JobtyesComponent;
  let fixture: ComponentFixture<JobtyesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobtyesComponent]
    });
    fixture = TestBed.createComponent(JobtyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
