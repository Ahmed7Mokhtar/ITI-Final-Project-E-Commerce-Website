import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { user } from '../auth/auth';
import { AuthenticationService } from '../login2/AuthenticationService';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder
    , private authenticationService: AuthenticationService,
    private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.pattern]],
        lastname: ['', [Validators.required, Validators.pattern]],
        email: ['', [Validators.required, Validators.email, Validators.pattern]],
        phoneNumber: ['', [Validators.required, Validators.pattern]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern]],
        confirmPassword: ['', [Validators.required, Validators.pattern]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let email = this.f['email'].value;
    let password = this.f['password'].value;


    this.authenticationService.signup(this.registerForm.value)
      .pipe()
      .subscribe(
        data => {
          debugger
          // this.router.navigate(["/cart"]);

          let helper = new JwtHelperService();
          let decodedToken;
          this.loading = true;

          this.http.post(`${environment.apiUrl}User/Login`, { email, password }, { responseType: 'text' })
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
                // this.isWrongUserNameOrPassword = true;

                // setTimeout(() => {
                //   this.isWrongUserNameOrPassword = false;
                // }, 10000);
              });
        },
        error => {
        });

    //
    //
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
