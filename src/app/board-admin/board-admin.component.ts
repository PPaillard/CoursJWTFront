import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardAdminComponent implements OnInit {
  // On défini une variable qui englobera le contenu de notre page
  // On note le "?"  qui permet de dire que la valeur sera rempli... Ou pas.
  content?: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // On appelle le service pour récupèrer le contenu accessible au rôle ADMIN
    this.userService.getAdminContent().subscribe(
      (data) => {
        // en cas de succès
        this.content = data;
      },
      (err) => {
        // en cas de soucis, on affiche le message d'erreur renvoyé par le BACK
        // (Message à créer dans le BACK bien sur)
        this.content = err.error;
      }
    );
  }
}
