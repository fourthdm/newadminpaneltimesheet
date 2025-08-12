import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteamComponent } from './viewteam.component';

describe('ViewteamComponent', () => {
  let component: ViewteamComponent;
  let fixture: ComponentFixture<ViewteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewteamComponent]
    });
    fixture = TestBed.createComponent(ViewteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
