import { Component } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // nos variables "globales"
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;

  title = 'CoursJWT';

  constructor(private tokenService: TokenStorageService) {}

  ngOnInit() {
    // on verifie que le token existe
    this.isLoggedIn = !!this.tokenService.getToken();
    // Si c'est le cas
    if (this.isLoggedIn) {
      console.log('logged');
      // on parametre le user et ses rôles
      const user = this.tokenService.getUser();
      this.roles = user.roles;
      // on parametre l'accès du user
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // on met en variable son nom
      this.username = user.username;
    }
  }

  // On gère l'action de déconnexion :
  // On appelle la fonction logout du service et on reload la page.
  logout() {
    this.tokenService.logout();
    window.location.reload();
  }
}
