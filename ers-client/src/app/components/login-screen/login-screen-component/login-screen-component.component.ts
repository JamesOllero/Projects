import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../app/model/user';

// -User inputs username/email and password
// -If successful, moves to Main Menu
// -User alternatively can move to Reset Password/Register


@Component({
  selector: 'app-login-screen-component',
  templateUrl: './login-screen-component.component.html',
  styleUrls: ['./login-screen-component.component.css']
})

export class LoginScreenComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginSubmit() {
    this.authService.authenticate(this.username, this.password,
    () => this.router.navigate([this.returnUrl]),
    (err) => {
      console.log(err);
    });
  }
}


