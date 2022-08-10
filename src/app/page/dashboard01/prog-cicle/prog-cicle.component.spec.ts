import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgCicleComponent } from './prog-cicle.component';

describe('ProgCicleComponent', () => {
  let component: ProgCicleComponent;
  let fixture: ComponentFixture<ProgCicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgCicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
