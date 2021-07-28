import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // Formulaire réactif (voir la quête associée)
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  // Variables permettant de gérer si la personne a bien été enregistrée ou non.
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // On exporte les variables dispo dans le form grace a la destructuration
    const { username, email, password } = this.form;
    // on appelle la fonction du service pour enregistré le user
    this.auth.register(username, email, password).subscribe(
      // Si tout se passe bien, on affiche un message "OK" à l'utilisateur
      (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err) => {
        // en cas de soucis, on affiche le message d'erreur renvoyé par le BACK
        // (Message à créer dans le BACK bien sur)
        this.isSignUpFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }
}
