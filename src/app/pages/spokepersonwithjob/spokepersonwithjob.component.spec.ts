import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokepersonwithjobComponent } from './spokepersonwithjob.component';

describe('SpokepersonwithjobComponent', () => {
  let component: SpokepersonwithjobComponent;
  let fixture: ComponentFixture<SpokepersonwithjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpokepersonwithjobComponent]
    });
    fixture = TestBed.createComponent(SpokepersonwithjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
