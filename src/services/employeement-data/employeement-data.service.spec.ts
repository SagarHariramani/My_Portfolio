import { TestBed } from '@angular/core/testing';

import { EmployeementDataService } from './employeement-data.service';

describe('EmployeementDataService', () => {
  let service: EmployeementDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeementDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
