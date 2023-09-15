import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/categorie';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Categorie[]>("http://localhost:8015/categorie/public")
  }

  getAnnonces(idcat:number){
    return this.http.get<Annonce[]>(`http://localhost:8015/annonce/public/categorie/${idcat}`)
  }

  saveCategorie(categorie:Categorie){
    return this.http.post("http://localhost:8015/categorie/user/save",categorie)
  }

  deleteCategorie(id:number){
    return this.http.delete(`http://localhost:8015/categorie/admin/supprimer/${id}`)
  }
}
