import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit{

  listeCategorie!:Categorie[];
  listeAnnonce!:Annonce[];
  categorie:Categorie= new Categorie();

  constructor(private cservice:CategorieService){}

  ngOnInit(): void {
    this.afficherAll();
    
  }

  afficherAll(){
    this.cservice.getAll().subscribe(
      response=>{this.listeCategorie=response;this.attribuerAnnonce()},
      error=>{console.error("Impossible d'afficher les catégories.")}
    )
  }

  attribuerAnnonce(){
    this.listeCategorie.forEach(categorie => {
      this.cservice.getAnnonces(categorie.id).subscribe(
        response=> {categorie.annonces=response,console.log(categorie),console.log(categorie.annonces)}       
      )
    });
  }
  enregistrerCategorie(){
    this.cservice.saveCategorie(this.categorie).subscribe(
      response =>{this.afficherAll()},
      error=>console.error("Impossible d'ajouter la catégorie")
    )
  }

  supprimerCategorie(id:number){
    this.cservice.deleteCategorie(id).subscribe(
      response=>{this.afficherAll(),console.log("Catégorie supprimée avec succès")},
      error=>{console.error("Impossible de supprimer la catégorie")}
    )
  }

  modifierCategorie(cat:Categorie){
    this.categorie=cat;
    this.afficherAll();
  }
}
