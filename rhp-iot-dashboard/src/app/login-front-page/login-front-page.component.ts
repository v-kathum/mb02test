import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Http } from '@angular/http';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-front-page',
  templateUrl: './login-front-page.component.html',
  styleUrls: ['./login-front-page.component.css']
})
export class LoginFrontPageComponent implements OnInit {
    model: any = {};
    registerMode = false;
    values: any;

  constructor(private authService: AuthService, private http: Http, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.alertify.success('Logged in successfully');
    }, error => {
      // this was changed to remove authentication, delete login and router to go back.
      this.authService.login(this.model).subscribe(data => {
        this.alertify.success('Failed to login');
        this.router.navigate(['/dashboard']);
      });
    }, () => {
      this.router.navigate(['/dashboard']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
