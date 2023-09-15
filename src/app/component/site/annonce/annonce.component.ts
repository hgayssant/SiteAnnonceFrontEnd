import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit{
  listeAnnonce!:Annonce[];
  constructor(private aService:AnnonceService){}
  ngOnInit(): void {
    this.afficherAll();
  }

  afficherAll(){
    this.aService.getAll().subscribe(
      response => {this.listeAnnonce=response},
      error => (console.error("Impossible d'afficher les annonces"))
    )
  }
}
