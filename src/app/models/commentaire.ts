import { Annonce } from "./annonce";
import { Utilisateur } from "./utilisateur";

export class Commentaire {
id!:number;
texte!:string;
utilisateur!:Utilisateur;
annonce!:Annonce;

constructor(id?:number,
    texte?:string,
    utilisateur?:Utilisateur,
    annonce?:Annonce,){

        if (id) {
            this.id = id
        }
        if (texte) {
            this.texte=texte
        }
        if (utilisateur) {
            this.utilisateur=utilisateur
        }
        if (annonce){
            this.annonce=annonce
        }
}

}
