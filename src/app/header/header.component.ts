import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Ajoutez ici toute logique spécifique au header si nécessaire
  isScrolled = false;
  //Sert à détecter le scroll de la page et à ajouter la classe scrolled au header si le scroll est supérieur à 50px
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}