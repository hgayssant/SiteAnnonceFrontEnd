import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationOK } from '../models/authentification-ok';
import { Utilisateur } from '../models/utilisateur';
import { AuthentificationRequest } from '../models/authentification-request';
import { AuthentificationResponse } from '../models/authentification-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  request !: AuthentificationRequest;
  constructor(private http: HttpClient) { }

  connection(username: string, password: string) {
    this.request = new AuthentificationRequest;
    this.request.username = username;
    this.request.password = password;
    return this.http.post<AuthentificationResponse>('http://localhost:8015/loginUserJwt', this.request)
  }

  getUser(username: string) {
    return this.http.get<Utilisateur>(`http://localhost:8015/utilisateur/public/username/${username}`)
  }
}
