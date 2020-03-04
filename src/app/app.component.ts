import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from './common/auth/auth.service';
import { WindowService } from './common/window/window.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  email: string;
  password: string;
  signInMode = false;
  windowRef: any;
  disableOTPSendButton = true;

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private windowService: WindowService
  ) { }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }

}
