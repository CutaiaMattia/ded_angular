import { TestBed } from '@angular/core/testing';

import { ExtractJsonService } from './extract-json.service';

describe('ExtractJsonService', () => {
  let service: ExtractJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
