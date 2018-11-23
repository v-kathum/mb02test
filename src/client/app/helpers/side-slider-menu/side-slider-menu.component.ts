import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-slider-menu',
  templateUrl: './side-slider-menu.component.html',
  styleUrls: ['./side-slider-menu.component.css']
})
export class SideSliderMenuComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.alertify.success('Logged out');
    this.router.navigate(['/home']);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
