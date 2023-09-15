import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  listeUtilisateur !: Utilisateur[];
  listeRole!: Role[];
  utilisateur!: Utilisateur;

  constructor(private uservice: UtilisateurService, private route:Router) { }

  ngOnInit(): void {
    this.afficherAll();
    this.afficherRoles();
    this.utilisateur= new Utilisateur(); // Pas besoin d'assigner un new role à utilisateur ici car déjà fait dans le model

  }

  afficherAll() {
    this.uservice.getAll().subscribe(
      response => {
        this.listeUtilisateur = response
      },
      error => { console.error("Impossible d'accéder à la page utilisateur") }
    )
  }

  enregistrerUtilisateur() {
    this.uservice.saveUtilisateur(this.utilisateur).subscribe(
      response => { this.afficherAll(); console.log("Utilisateur enregistré") },
      error => { console.error("Impossible d'enregistrer l'utilisateur") }
    )
  }
  afficherRoles() {
    this.uservice.getAllRole().subscribe(
      response => {this.listeRole = response, console.log(this.listeRole) },
      error => {console.error('Impossible d\'afficher les roles')}
    )
  }

  supprimerUtilisateur(id:number){
    this.uservice.deleteUtilisateur(id).subscribe(
      response => {
        console.log("utilisateur supprimé"), this.afficherAll()
      },
      error=>{console.error("Impossible de supprimer l'utilisateur")}
    )
  }

  modifierUtilisateur(u:Utilisateur){
    this.utilisateur=u;
    this.afficherAll();
  }

  bloquerUtilisateur(u:Utilisateur){
    if (u.bloque) {
      u.bloque=false
    } else {
      u.bloque=true
    }
    this.uservice.saveUtilisateur(u).subscribe(
      response => {if (u.bloque==true) {
        console.log("Utilisateur bloqué")
      } else {
        console.log("Annonce débloqué")
      }; this.afficherAll()},
      error=>{if (u.bloque==true) {
        console.error("Impossible de bloquer l'annonce")
      } else {
        console.error("Impossible de débloquer l'annonce")
      }}
    )
  }

  afficherCommentaireUtilisateur(id:number,username:string){
    console.log(id)
    console.log(username)
    this.route.navigateByUrl(`afficherCommentaire/${username}/${id}`)
  }

  afficherAnnonceUtilisateur(id:number){
    this.route.navigateByUrl(`afficherAnnonce/${id}`)
  }
}
