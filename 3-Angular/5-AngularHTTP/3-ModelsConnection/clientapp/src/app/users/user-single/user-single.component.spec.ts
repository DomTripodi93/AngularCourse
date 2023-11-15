import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleComponent } from './user-single.component';

describe('UserSingleComponent', () => {
  let component: UserSingleComponent;
  let fixture: ComponentFixture<UserSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSingleComponent]
    });
    fixture = TestBed.createComponent(UserSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
