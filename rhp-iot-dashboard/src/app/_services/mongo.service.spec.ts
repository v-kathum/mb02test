/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MongoService } from './mongo.service';

describe('Service: Mongo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoService]
    });
  });

  it('should ...', inject([MongoService], (service: MongoService) => {
    expect(service).toBeTruthy();
  }));
});
