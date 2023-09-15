import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SiteAnnonceNG';

  doitAfficher!: boolean;

  constructor(private router: Router) {
    // Vérifiez le chemin d'accès actuel
    this.router.events.subscribe(() => {
      this.doitAfficher = this.router.url.includes('/login');
    });
  }
}
