import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // URL vers l'auth
  API: string = 'http://localhost:8080/api/auth/';

  // On créé un header pour préciser au back quel format de données on lui transmet
  // (non obligatoire, c'est + pour de la connaissance)
  headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // Fonction permetant d'appeler l'enregistre d'utilisateur
  // /!\ Le nom de vos variables doit correspondre au @RequestBody de votre back, ou vice versa !
  register(username: string, email: string, password: string): Observable<any> {
    // on appelle le BACK avec un HTTP POST, on transfert des datas !
    // On utilise post(url, body, header)
    return this.http.post(
      this.API + 'signup',
      {
        username,
        email,
        password,
      },
      this.headerOption
    );
  }

  // Fonction permettant d'appeler la connexion user
  // /!\ Le nom de vos variables doit correspondre au @RequestBody de votre back, ou vice versa !
  login(username: string, password: string): Observable<any> {
    // on appelle le BACK avec un HTTP POST, on transfert des datas !
    // On utilise post(url, body, header)
    return this.http.post(
      this.API + 'signin',
      {
        username,
        password,
      },
      this.headerOption
    );
  }
}
