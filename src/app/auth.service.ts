import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API: string = "http://localhost:8080/api/auth/";

  headerOption = {
    headers : new HttpHeaders({ "Content-Type" : "application/json"})
  };

  constructor(private http: HttpClient) { }

  register(username: string, email:string, password:string) : Observable<any> {

    return this.http.post(this.API + "signup", {
      username, email,password
    }
    , this.headerOption);
  }

  login(username:string, password:string) : Observable<any> {

    return this.http.post(this.API + "signin", {
      username,password
    }
    , this.headerOption);
  }
}
