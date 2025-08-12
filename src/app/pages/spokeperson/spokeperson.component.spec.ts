import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokepersonComponent } from './spokeperson.component';

describe('SpokepersonComponent', () => {
  let component: SpokepersonComponent;
  let fixture: ComponentFixture<SpokepersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpokepersonComponent]
    });
    fixture = TestBed.createComponent(SpokepersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
