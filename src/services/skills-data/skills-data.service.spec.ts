import { TestBed } from '@angular/core/testing';

import { SkillsDataService } from './skills-data.service';

describe('SkillsDataService', () => {
  let service: SkillsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
