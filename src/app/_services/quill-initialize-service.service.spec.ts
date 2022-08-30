import { TestBed } from '@angular/core/testing';

import { QuillInitializeServiceService } from './quill-initialize-service.service';

describe('QuillInitializeServiceService', () => {
  let service: QuillInitializeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuillInitializeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
