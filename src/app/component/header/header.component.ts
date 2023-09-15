import { Component,OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { Utilisateur } from 'src/app/models/utilisateur';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
user !: Utilisateur;
listeCategorie !: Categorie[];
username !: string;

constructor(private cservice :CategorieService){}

  ngOnInit(): void {
    this.afficherCategorie();
    let sessionUser = sessionStorage.getItem("currentUser");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : undefined;
  }


  afficherCategorie(){
    this.cservice.getAll().subscribe(
      response=>{this.listeCategorie=response},
      error=>{console.error("Impossible d'afficher les catégories.")}
    )
  }
  deconnection(){
    window.sessionStorage.clear();
    console.log("Déconnection réussie")
  }
}
