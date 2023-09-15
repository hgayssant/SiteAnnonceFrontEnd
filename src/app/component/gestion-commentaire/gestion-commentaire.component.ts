import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { Commentaire } from 'src/app/models/commentaire';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AnnonceService } from 'src/app/service/annonce.service';
import { CommentaireService } from 'src/app/service/commentaire.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-gestion-commentaire',
  templateUrl: './gestion-commentaire.component.html',
  styleUrls: ['./gestion-commentaire.component.css']
})
export class GestionCommentaireComponent implements OnInit{
  listeCommentaire!:Commentaire[];
  commentaire!:Commentaire;
  idcible !:number;
  username !: string;

  listeAnnonce!:Annonce[];
  listeUtilisateur!:Utilisateur[];
  
  constructor(private comService:CommentaireService, 
    private aService:AnnonceService,private utilService:UtilisateurService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idcible=this.route.snapshot.params["id"];
    this.username=this.route.snapshot.params["username"];
    this.afficherAll();
    this.afficherAnnonce();
    this.afficherUtilisateur();
    this.commentaire=new Commentaire();
    this.commentaire.annonce=new Annonce();
    this.commentaire.utilisateur = new Utilisateur();
  }
  
  afficherAll(){
if (this.idcible!=undefined) {
  if (this.username!=undefined) {
    this.comService.getByUtilisateurId(this.idcible).subscribe(
      response=>{this.listeCommentaire=response},
      error=> {console.error("Impossible d'afficher les commentaires de l'utilisateur")}
    )
  } else {
    this.comService.getByAnnonceId(this.idcible).subscribe(
      response=>{this.listeCommentaire=response},
      error=> {console.error("Impossible d'afficher les commentaires de l'annonce")}
    )
  }
  
  
}else{
  this.comService.getAll().subscribe(
    response => {this.listeCommentaire=response},
    error => {console.error("Impossible d'afficher la page des commentaires")}
  )
}
  }

  enregistrerCommentaire(){
    this.comService.saveCommentaire(this.commentaire).subscribe(
      response=>{
        this.commentaire=new Commentaire();
        this.commentaire.annonce= new Annonce();
        this.commentaire.utilisateur= new Utilisateur();
        this.afficherAll();
        console.log("Commentaire enregistré")
      },
      error => {console.error("Impossible d'enregistrer le commentaire")}
    )
  }

  supprimerCommentaire(id:number){
    this.comService.deleteCommentaire(id).subscribe(
      response => {
        console.log("Commentaire supprimé");
        this.afficherAll();
      },
      error => {console.error("Impossible de supprimer le commentaire")}
    )
  }
  modifierCommentaire(commentaire:Commentaire){
    this.commentaire=commentaire;
    this.afficherAll();
  }

  afficherAnnonce(){
    this.aService.getAll().subscribe(
      response=>{this.listeAnnonce=response, console.log(this.listeAnnonce)},
      error =>{console.error("Impossible d'afficher les annonces")}
    )
  }
  afficherUtilisateur(){
    this.utilService.getAll().subscribe(
      response=>{this.listeUtilisateur=response, console.log(this.listeUtilisateur)},
      error => {console.error("Impossible d'afficher la liste des utilisateurs")}
    )
  }
}
