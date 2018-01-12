import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponent } from './login-screen.component';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'app/auth/auth.service';

describe('LoginScreenComponent', () => {
  let component: LoginScreenComponent;
  let fixture: ComponentFixture<LoginScreenComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginScreenComponent],
        providers: [
          AuthService,
          AngularFireAuth,
          {
            provide: Router,
            useClass: class {
              navigate = jasmine.createSpy('navigate');
            }
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
