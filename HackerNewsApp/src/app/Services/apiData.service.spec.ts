import { TestBed } from '@angular/core/testing';

import { ApiDataService } from './apiData.service';
import {HttpClientModule} from '@angular/common/http';

describe('BosapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApiDataService = TestBed.get(ApiDataService);
    expect(service).toBeTruthy();
  });
});
