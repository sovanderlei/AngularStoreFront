import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincreatComponent } from './logincreat.component';

describe('LogincreatComponent', () => {
  let component: LogincreatComponent;
  let fixture: ComponentFixture<LogincreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
