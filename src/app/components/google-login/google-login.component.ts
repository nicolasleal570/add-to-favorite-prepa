import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginWithGoogle(): void {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/']);
    });
  }
}
