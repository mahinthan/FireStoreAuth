import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from './../../common/auth/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
