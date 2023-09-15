import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Utilisateur[]>("http://localhost:8015/utilisateur/public")
  }

  saveUtilisateur(utilisateur:Utilisateur){
    console.log(utilisateur)
    return this.http.post("http://localhost:8015/utilisateur/user/save",utilisateur)
  }

  deleteUtilisateur(id:number){
    return this.http.delete(`http://localhost:8015/utilisateur/admin/supprimer/${id}`)
  }

  getAllRole(){
    return this.http.get<Role[]>("http://localhost:8015/utilisateur/public/roles")
  }
}

