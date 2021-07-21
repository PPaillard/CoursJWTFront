import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private auth : AuthService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.auth.login(username, password).subscribe(
      data=> {
        console.log(data)
        // on enregistre le token d'authentification
        this.tokenService.saveToken(data.accessToken)
        // on enregistre le user
        this.tokenService.saveUser(data)
        // on paramètre ses rôles
        this.roles = this.tokenService.getUser().roles;
        // on recharge la page pour prendre tout cela en compte.
        this.reloadPage()
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }
}
