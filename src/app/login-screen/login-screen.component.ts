import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.auth.login().subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
  logout() {
    this.auth.logout();
  }
}
