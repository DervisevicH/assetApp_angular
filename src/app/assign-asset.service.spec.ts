import { TestBed } from '@angular/core/testing';

import { AssignAssetService } from './assign-asset.service';

describe('AssignAssetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignAssetService = TestBed.get(AssignAssetService);
    expect(service).toBeTruthy();
  });
});
