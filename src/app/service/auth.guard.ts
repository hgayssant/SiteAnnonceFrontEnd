import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let valid: boolean = false;
    if (sessionStorage.getItem("jwtToken") !=null ) {
      let sessionUser = sessionStorage.getItem("currentUser");

      const user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();
      let role: Role = user.role;
      
      if (route.data['role'] && route.data['role'].includes(role.nom)) { // Si on trouve le rôle associé au user dans le path alors le user peut y accéder
        valid = true;
      };
      if (!route.data['role']) { // S'il n'y a pas de rôle requis la page est publique
        valid = true;
      };
      
    }
    if (valid == true) {
      return true
    }
    this.router.navigateByUrl('login');
    return false;
  }

}