import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {

    const {username, email, password} = this.form;
    // on enregistre notre utilisateur
    this.auth.register(username, email, password).subscribe(
      data => {
        console.log(data)
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.isSignUpFailed = true;
        this.errorMessage = err.error.message;
        
      }
    )
  }
}
