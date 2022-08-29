import { TestBed } from '@angular/core/testing';

import { TbreportdinamicyService } from './tbreportdinamicy.service';

describe('TbreportdinamicyService', () => {
  let service: TbreportdinamicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TbreportdinamicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
