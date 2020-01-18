import { TestBed } from '@angular/core/testing';

import { CssWriterService } from './css-writer.service';

describe('CssWriterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CssWriterService = TestBed.get(CssWriterService);
    expect(service).toBeTruthy();
  });
});
