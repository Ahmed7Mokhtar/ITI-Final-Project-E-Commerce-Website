import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './AuthenticationService';
import { JwtHelperService } from '@auth0/angular-jwt';
import { user } from '../auth/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "/products";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _AuthenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    //  if (this.authenticationService.currentUserValue) { 
    //    this.router.navigate(['/']);
    //}
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern]],
      password: ['', [Validators.required, Validators.pattern, Validators.minLength(6)]]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  isWrongUserNameOrPassword: boolean = false;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    let helper = new JwtHelperService();
    let decodedToken;
    this.loading = true;
    this.isWrongUserNameOrPassword = false;

    this._AuthenticationService.login(this.f['email'].value, this.f['password'].value)
      .subscribe(
        (token: string) => {
          localStorage.setItem('token', token);
          decodedToken = helper.decodeToken(token);
          console.log(decodedToken);
          if (decodedToken.role != 'User') {
            user.changeAdmin(true);
          } else {
            user.changeAdmin(false);
          }
          this.router.navigate(["/cart"]).then(() => {
            window.location.reload();
          })
        },
        error => {
          this.loading = false;
          this.isWrongUserNameOrPassword = true;

          setTimeout(() => {
            this.isWrongUserNameOrPassword = false;
          }, 10000);
        });
    //this.router.navigate([this.returnUrl]);
  }
}
