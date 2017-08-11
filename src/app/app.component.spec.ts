import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { PlayersListComponent } from './players-list/players-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EventsListComponent,
        PlayersListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
