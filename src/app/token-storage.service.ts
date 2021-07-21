import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  // J'enregistre le token
  saveToken(token:string) : void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  // j'enregistre l'utilisateur
  saveUser(user:any) : void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
  }

  // Récupère le token
  getToken() : string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }

  // Récupère le user
  getUser():any{
    const user = window.sessionStorage.getItem(USER_KEY)
    if(user){
      return JSON.parse(user);
    }
    return{}
  }

  logout(){
    window.sessionStorage.clear();
  }
}
