import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  googleLogin(): void {
    this.authService.googleSignIn().then((credential) => {
      if (credential.additionalUserInfo.isNewUser) {
        this.authService.updateUserData(credential.user).then(() => {
          this.router.navigate(['home']);
        });
      }
      if (!credential.additionalUserInfo.isNewUser) {
        this.router.navigate(['home']);
      }
    });
  }
}
