import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftingjobsComponent } from './draftingjobs.component';

describe('DraftingjobsComponent', () => {
  let component: DraftingjobsComponent;
  let fixture: ComponentFixture<DraftingjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraftingjobsComponent]
    });
    fixture = TestBed.createComponent(DraftingjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
