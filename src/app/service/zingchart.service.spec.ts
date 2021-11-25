import { TestBed } from '@angular/core/testing';

import { ZingchartService } from './zingchart.service';

describe('ZingchartService', () => {
  let service: ZingchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZingchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
