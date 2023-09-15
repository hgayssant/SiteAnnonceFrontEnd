import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  utilisateur:Utilisateur = new Utilisateur();

  constructor(private authService: AuthService, private router: Router) { }
  

  connection() {
    this.authService.connection(this.username, this.password).subscribe(
      response => {
        console.log("Connection réussie"),
        sessionStorage.setItem('jwtToken', response.jwt),
        
        this.authService.getUser(this.username).subscribe(
          response2=> {
            this.utilisateur=response2, 
            sessionStorage.setItem('currentUser',JSON.stringify(this.utilisateur));
            this.router.navigateByUrl('menuAdmin')
          }
        )
        
      },
      error => { console.error("Impossible de se connecter") }

    )
  }

}
