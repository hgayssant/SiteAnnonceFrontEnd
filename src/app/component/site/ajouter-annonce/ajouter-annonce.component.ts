import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { Categorie } from 'src/app/models/categorie';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AnnonceService } from 'src/app/service/annonce.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {
  annonce !: Annonce;
  currentUser !: Utilisateur;
  listeCategorie!:Categorie[];
  listeUtilisateur!:Utilisateur[];

  constructor(private aService:AnnonceService, private catservice:CategorieService
    ,private utilservice:UtilisateurService,private route:Router){}

  ngOnInit(): void {
  this.annonce = new Annonce();
  this.annonce.categorie = new Categorie();
  this.afficherCategorie();
  }

  afficherCategorie(){
    this.catservice.getAll().subscribe(
      response=>{this.listeCategorie=response,console.log(this.listeCategorie)},
      error=>{console.error("Impossible d'afficher les catégories.")}
    )
  }

  enregistrerAnnonce(){
    let sessionUser = sessionStorage.getItem("currentUser");
    if (sessionUser !=null) {
      this.currentUser=JSON.parse(sessionUser);
      this.annonce.utilisateur=this.currentUser;
    }
   
      this.aService.saveAnnonce(this.annonce).subscribe(
      response=> {console.log("Annonce enregistrée"
      ,
       this.route.navigateByUrl("annonces"))},
      error => {console.error("Impossible d'ajouter l'annonce")}
    )
  }
}
