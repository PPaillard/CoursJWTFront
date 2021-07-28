import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // On va chercher le contenu de la route ADMIN avec un appel GET
  // La personne connectée doit avoir les bons droits.
  getAdminContent(): Observable<any> {
    return this.http.get(API + 'admin', { responseType: 'text' });
  }

  // On va chercher le contenu de la route USER avec un appel GET
  // La personne doit avoir les bons droits.
  getUserContent(): Observable<any> {
    return this.http.get(API + 'user', { responseType: 'text' });
  }
}
