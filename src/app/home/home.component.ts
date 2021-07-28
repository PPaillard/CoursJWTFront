import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor() {}

  ngOnInit(): void {
    // Ici on pourrait appeler une fonction du service User
    // qui irait recupérer du contenu public sur notre BACK
  }
}
