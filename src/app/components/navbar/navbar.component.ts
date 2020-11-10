import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/']);
    });
  }

  logout(): void {
    this.authService
      .logout()
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((err) => console.log(err));
  }

  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe((value) => {
      this.user = value;
    });
  }
}
