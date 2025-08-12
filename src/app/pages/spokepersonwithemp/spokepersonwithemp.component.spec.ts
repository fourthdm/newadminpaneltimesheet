import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokepersonwithempComponent } from './spokepersonwithemp.component';

describe('SpokepersonwithempComponent', () => {
  let component: SpokepersonwithempComponent;
  let fixture: ComponentFixture<SpokepersonwithempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpokepersonwithempComponent]
    });
    fixture = TestBed.createComponent(SpokepersonwithempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
