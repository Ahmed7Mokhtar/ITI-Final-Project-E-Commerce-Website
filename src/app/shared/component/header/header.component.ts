import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { user } from 'src/app/auth/auth';
import { SharedService } from '../../Services/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;

  constructor(private route: Router,
    private activatedRoute: ActivatedRoute,
    private sharedservice: SharedService) { }

  ngOnInit(): void {
    user.checkIfLoggedIn();
    this.checkIsAdmin()
    this.checkIsloggedIn();
  }

  checkIsAdmin(): boolean {
    return user.getIsAdmin();
  }

  checkIsloggedIn(): boolean {
    if (user.getLoggedIn()) {
      let helper = new JwtHelperService();
      let temp = localStorage.getItem('token');
      let decToken = helper.decodeToken(temp);
      this.userName = decToken.UserName;
      let temp3 = this.userName.split('@');
      this.userName = temp3[0];
    }
    return user.getLoggedIn();
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
  }

  getCartLength() {
    if (localStorage.getItem("cart")!) {
      let arr = JSON.parse(localStorage.getItem("cart")!);
      return arr.length;
    }
  }

  //   relativeRoutte() {
  //     this.route.navigate(['login'], { relativeTo: this.activatedRoute });
  //   }
  // 
}