import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GestionCategorieComponent } from './component/gestion-categorie/gestion-categorie.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { GestionUtilisateurComponent } from './component/gestion-utilisateur/gestion-utilisateur.component';
import { InterceptorInterceptor } from './service/interceptor.interceptor';
import { GestionAnnonceComponent } from './component/gestion-annonce/gestion-annonce.component';
import { GestionCommentaireComponent } from './component/gestion-commentaire/gestion-commentaire.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { AnnonceComponent } from './component/site/annonce/annonce.component';
import { HeaderComponent } from './component/header/header.component';
import { AjouterAnnonceComponent } from './component/site/ajouter-annonce/ajouter-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionCategorieComponent,
    LoginComponent,
    AccueilComponent,
    GestionUtilisateurComponent,
    GestionAnnonceComponent,
    GestionCommentaireComponent,
    AdminMenuComponent,
    AnnonceComponent,
    HeaderComponent,
    AjouterAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
