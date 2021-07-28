import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // permettrait idéalement d'afficher les informations de l'utilisateur
  // A recupérer via le service si l'utilisateur est connecté
  currentUser: any;

  ngOnInit(): void {
    // On tente de recuperer les informations du user
    // Au chargement de la page
  }
}
