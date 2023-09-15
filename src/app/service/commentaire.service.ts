import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from '../models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Commentaire[]>("http://localhost:8015/commentaire/public")
  }

  getByAnnonceId(idannonce:number){
    return this.http.get<Commentaire[]>(`http://localhost:8015/commentaire/public/annonce/${idannonce}`)
  }

  getByUtilisateurId(idutil:number){
    return this.http.get<Commentaire[]>(`http://localhost:8015/commentaire/public/annonce/${idutil}`)
  }

  saveCommentaire(commentaire:Commentaire){
    console.log(commentaire)
    return this.http.post("http://localhost:8015/commentaire/user/save",commentaire)
  }

  deleteCommentaire(id:number){
    return this.http.delete(`http://localhost:8015/commentaire/admin/supprimer/${id}`)
  }
}
