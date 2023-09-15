import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionCategorieComponent } from './component/gestion-categorie/gestion-categorie.component';
import { LoginComponent } from './component/login/login.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { authGuard } from './service/auth.guard';
import { GestionUtilisateurComponent } from './component/gestion-utilisateur/gestion-utilisateur.component';
import { GestionAnnonceComponent } from './component/gestion-annonce/gestion-annonce.component';
import { GestionCommentaireComponent } from './component/gestion-commentaire/gestion-commentaire.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { AnnonceComponent } from './component/site/annonce/annonce.component';
import { AjouterAnnonceComponent } from './component/site/ajouter-annonce/ajouter-annonce.component';

// data: { roles: ['ADMIN', 'USER'] } 

const routes: Routes = [
  {path:'home',component:AccueilComponent},
  {path:'annonces',component:AnnonceComponent},
  {path:'newAnnonce',component:AjouterAnnonceComponent,canActivate:[authGuard],data: {role:['ADMIN','USER']}},
  {path:'menuAdmin',component:AdminMenuComponent,canActivate:[authGuard],data: {role:'ADMIN'}},
  {path:'afficherUtilisateur',component:GestionUtilisateurComponent,canActivate:[authGuard]
  ,data: {role:'ADMIN'}},
  {path:'afficherCategorie',component:GestionCategorieComponent,canActivate:[authGuard]
  ,data: {role:'ADMIN'}},
  {path:'afficherAnnonce/:id',component:GestionAnnonceComponent,canActivate:[authGuard]
  ,data: {role:'ADMIN'}},
  {path:'afficherAnnonce',component:GestionAnnonceComponent,canActivate:[authGuard]
  ,data: {role:'ADMIN'}},
  {path:'afficherCommentaire/:username/:id',component:GestionCommentaireComponent,canActivate:[authGuard]
  ,data: {role:'ADMIN'}},
  {path:'afficherCommentaire/:id',component:GestionCommentaireComponent,canActivate:[authGuard]
  ,data: {role:'ADMIN'}},
  {path:'afficherCommentaire',component:GestionCommentaireComponent,canActivate:[authGuard]
  ,data: {role:'ADMIN'}},
  {path:'login',component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }