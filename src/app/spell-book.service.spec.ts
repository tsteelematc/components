import { TestBed } from '@angular/core/testing';

import { SpellBookService } from './spell-book.service';

describe('SpellBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellBookService = TestBed.get(SpellBookService);
    expect(service).toBeTruthy();
  });
});
