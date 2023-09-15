import { Annonce } from "./annonce";

export class Categorie {
    id!:number;
    nom!:string;
    annonces!:Annonce[];

    constructor(id?:number,nom?:string,annonces?:Annonce[]){
        if (id) {
            this.id=id;
        }
        if (nom) {
            this.nom=nom;
        }
        if (annonces) {
            this.annonces=annonces
        }
    }
}
