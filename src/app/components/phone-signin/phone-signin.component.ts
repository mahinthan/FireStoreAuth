import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { AuthService } from './../../common/auth/auth.service';
import { WindowService } from '../../common/window/window.service';

@Component({
  selector: 'app-phone-signin',
  templateUrl: './phone-signin.component.html',
  styleUrls: ['./phone-signin.component.css']
})
export class PhoneSigninComponent implements OnInit, AfterViewInit {

  windowRef: any;
  phoneNumber: string;
  otp: string;
  disableOTPSendButton = true;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private windowService: WindowService
  ) { }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }

  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        this.disableOTPSendButton = false;
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }

  sendOTP() {
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
    });
  }

  verifyOTP() {
    this.windowRef.confirmationResult.confirm(this.otp)
      .then((userCredentials) => console.log(userCredentials));
  }

  togglePhoneSignIn() {
    this.authService.phoneSignIn = !this.authService.phoneSignIn;
  }

}
