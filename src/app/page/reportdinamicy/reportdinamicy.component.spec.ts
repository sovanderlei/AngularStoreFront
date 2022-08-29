import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdinamicyComponent } from './reportdinamicy.component';

describe('ReportdinamicyComponent', () => {
  let component: ReportdinamicyComponent;
  let fixture: ComponentFixture<ReportdinamicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportdinamicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdinamicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
