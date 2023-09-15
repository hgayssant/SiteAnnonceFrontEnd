import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Annonce[]>("http://localhost:8015/annonce/public")
  }

  getByUtilisateurId(idutil:number){
    return this.http.get<Annonce[]>(`http://localhost:8015/annonce/public/utilisateur/${idutil}`)
  }

  saveAnnonce(annonce:Annonce){
    console.log(annonce)
    return this.http.post("http://localhost:8015/annonce/user/save",annonce)
  }

  deleteAnnonce(id:number){
    return this.http.delete(`http://localhost:8015/annonce/admin/supprimer/${id}`)
  }
}
