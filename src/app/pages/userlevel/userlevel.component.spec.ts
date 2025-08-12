import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlevelComponent } from './userlevel.component';

describe('UserlevelComponent', () => {
  let component: UserlevelComponent;
  let fixture: ComponentFixture<UserlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlevelComponent]
    });
    fixture = TestBed.createComponent(UserlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
