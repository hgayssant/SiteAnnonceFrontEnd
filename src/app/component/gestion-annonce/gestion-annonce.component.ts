import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { Categorie } from 'src/app/models/categorie';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AnnonceService } from 'src/app/service/annonce.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-gestion-annonce',
  templateUrl: './gestion-annonce.component.html',
  styleUrls: ['./gestion-annonce.component.css']
})
export class GestionAnnonceComponent implements OnInit {
  listeAnnonce!:Annonce[];
  listeCategorie!:Categorie[];
  listeUtilisateur!:Utilisateur[];
  annonce!:Annonce;
  idcible !:number;
  
constructor(private aservice:AnnonceService,private catservice:CategorieService
  ,private utilservice:UtilisateurService
  ,private route:Router, private acitvatedRoute:ActivatedRoute){

}

  ngOnInit(): void {
    this.idcible=this.acitvatedRoute.snapshot.params["id"];
    this.afficherAll();
    this.afficherCategories();
    this.afficherUtilisateurs();
    this.annonce=new Annonce();
    this.annonce.categorie = new Categorie();
    this.annonce.utilisateur = new Utilisateur();

    
  }
  
  afficherAll(){
    if(this.idcible !=undefined){
      this.aservice.getByUtilisateurId(this.idcible).subscribe(
        response => {this.listeAnnonce=response},
        error => {console.error("Impossible d'afficher les annonces de cet utilisateur")}
      )
    }else{
      this.aservice.getAll().subscribe(
        response=>{this.listeAnnonce=response, console.log(this.listeAnnonce)},
        error =>{console.error("Impossible d'afficher les annonces")}
      )
    }

  }

  enregistrerAnnonce() {

    this.aservice.saveAnnonce(this.annonce).subscribe(
      response => { 
        this.annonce=new Annonce();
        this.annonce.categorie=new Categorie();this.annonce.utilisateur = new Utilisateur();
        this.afficherAll();
         console.log("Annonce enregistré") },
      error => { console.error("Impossible d'enregistrer l'annonce") }
    )
  }

  supprimerAnnonce(id:number){
    this.aservice.deleteAnnonce(id).subscribe(
      response => {
        console.log("annonce supprimée"), this.afficherAll()
      },
      error=>{console.error("Impossible de supprimer l'annonce")}
    )
  }

  afficherCategories(){
    this.catservice.getAll().subscribe(
      response=>{this.listeCategorie=response,console.log(this.listeCategorie)},
      error=>{console.error("Impossible d'afficher les catégories.")}
    )
  }

  afficherUtilisateurs() {
    this.utilservice.getAll().subscribe(
      response => {
        this.listeUtilisateur = response,console.log(this.listeUtilisateur)
      },
      error => { console.error("Impossible d'afficher les utilisateurs") }
    )
  }

  modifierAnnonce(a:Annonce){
    this.annonce=a;
    this.afficherAll();
  }
  
  validerAnnonce(a:Annonce){
    console.log(a)
    if (a.valide==true) {
      a.valide=false
    } else {
      a.valide=true
    }
    this.aservice.saveAnnonce(a).subscribe(
      response => {if (a.valide==true) {
        console.log("Annonce validée")
      } else {
        console.log("Annonce Bloquée")
      }; this.afficherAll()},
      error=>{if (a.valide==true) {
        console.error("Impossible de valider l'annonce")
      } else {
        console.error("Impossible de bloquer l'annonce")
      }}
    )

  }
  afficherCommentaire(id:number){
    this.route.navigateByUrl(`afficherCommentaire/${id}`)
  }

}
