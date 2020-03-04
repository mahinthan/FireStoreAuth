import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../common/auth/auth.service';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signInOrSignUp() {
    this.authService.signInOrSignUp(this.email, this.password);
  }

}
