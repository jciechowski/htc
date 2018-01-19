import { TestBed, inject } from '@angular/core/testing';

import { PlayersService } from './players.service';
import { Gender, Players } from './players';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersService]
    });
  });

  it(
    'should be created',
    inject([PlayersService], (service: PlayersService) => {
      expect(service).toBeTruthy();
    })
  );
});
