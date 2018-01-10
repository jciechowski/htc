import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    return true;
  }

  constructor() {}
}
