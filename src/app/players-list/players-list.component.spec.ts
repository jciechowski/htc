import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListComponent } from './players-list.component';
import { PlayersService } from './players.service';

describe('PlayersListComponent', () => {
  let component: PlayersListComponent;
  let fixture: ComponentFixture<PlayersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersListComponent ],
      providers: [PlayersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
