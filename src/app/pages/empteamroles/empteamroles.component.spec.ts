import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpteamrolesComponent } from './empteamroles.component';

describe('EmpteamrolesComponent', () => {
  let component: EmpteamrolesComponent;
  let fixture: ComponentFixture<EmpteamrolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpteamrolesComponent]
    });
    fixture = TestBed.createComponent(EmpteamrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
