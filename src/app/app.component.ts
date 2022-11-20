import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { user } from './auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.checkLoggedInUser();
  }
  title = 'hello-ang';


  checkLoggedInUser() {
    user.checkIfLoggedIn();
  }
}