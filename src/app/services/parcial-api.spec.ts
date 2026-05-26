import { TestBed } from '@angular/core/testing';

import { ParcialApi } from './parcial-api';

describe('ParcialApi', () => {
  let service: ParcialApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcialApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
