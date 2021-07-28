import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Formulaire réactif (voir la quête associée)
  form: any = {
    username: null,
    password: null,
  };
  // Variables permettant de gérer si la personne a bien été connecté ou non.
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private auth: AuthService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // on utilise la destructuration pour recuperer les variables du formulaire
    const { username, password } = this.form;
    // On appelle la méthode du service pour gérer la connexion
    this.auth.login(username, password).subscribe(
      (data) => {
        // Si tout s'est bien passé
        console.log(data);
        // on enregistre le token d'authentification
        this.tokenService.saveToken(data.accessToken);
        // on enregistre le user
        this.tokenService.saveUser(data);
        // on paramètre ses rôles
        this.roles = this.tokenService.getUser().roles;
        // on recharge la page pour prendre tout cela en compte.
        this.reloadPage();
      },
      (err) => {
        // Si une erreur est survenue
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
