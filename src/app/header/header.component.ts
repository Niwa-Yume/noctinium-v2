import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Variable pour contrôler l'état du menu (ouvert/fermé)
  isMenuOpen = false;

  // Méthode pour basculer l'état du menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Méthode pour fermer le menu
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Méthode pour gérer l'ouverture du modal de connexion/inscription
  toggleLoginModal() {
    console.log('Ouverture du modal de connexion/inscription');
    // Ici, vous pouvez ajouter la logique pour ouvrir/fermer le modal
  }
}