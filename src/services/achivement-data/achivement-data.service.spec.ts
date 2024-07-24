import { TestBed } from '@angular/core/testing';

import { AchivementDataService } from './achivement-data.service';

describe('AchivementDataService', () => {
  let service: AchivementDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchivementDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
