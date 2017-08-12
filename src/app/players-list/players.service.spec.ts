import { TestBed, inject } from '@angular/core/testing';

import { PlayersService } from './players.service';
import { Gender, Players } from './players';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersService]
    });
  });

  it('should be created', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all players', inject([PlayersService], (service: PlayersService) => {
    const allPlayers = service.getPlayers();
    expect(allPlayers).toEqual(Players);
  }));

  it('should add new player', inject([PlayersService], (service: PlayersService) => {
    const totalPLayers = service.getPlayers().length;
    service.addPlayer({name: 'Test', lastname: 'Test', jerseyNumber: 0, gender: Gender.man});
    expect(service.getPlayers().length).toEqual(totalPLayers + 1);
  }));
});
