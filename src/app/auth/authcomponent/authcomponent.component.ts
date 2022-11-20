import { Component, OnInit } from '@angular/core';
import { user } from '../auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrls: ['./authcomponent.component.css']
})
export class AuthcomponentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.checkLoggedInUser();
  }

  checkLoggedInUser() {
    let tokenl;
    let helper = new JwtHelperService();
    let decodedToken;
    if (localStorage.getItem('token')) {
      tokenl = localStorage.getItem('token');
      user.changeIsLoggedIn(true);
      decodedToken = helper.decodeToken(tokenl as string)
      if (decodedToken.role != 'User') {
        user.changeAdmin(true);
      } else {
        user.changeAdmin(false);
      }
    }
    else {
      user.changeIsLoggedIn(false);
    }
  }

}
