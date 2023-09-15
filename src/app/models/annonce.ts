import { Categorie } from "./categorie";
import { Commentaire } from "./commentaire";
import { Utilisateur } from "./utilisateur";

export class Annonce {
    id!:number;
    titre!:string;
    description!:string;
    valide!:boolean;
    image!:string;

    datePublication!:Date;
    dateExpiration!:Date;

    utilisateur!:Utilisateur;
    commentaires!:Commentaire[];
    categorie!:Categorie;

    constructor(id?:number,
        titre?:string,
        description?:string,
        valide?:boolean,
        image?:string,
    
        datePublication?:Date,
        dateExpiration?:Date,
    
        utilisateur?:Utilisateur,
        commentaires?:Commentaire[],
        categorie?:Categorie) {

        if (id) {
            this.id = id
        }
        if (titre) {
            this.titre = titre
        }
        if (description) {
            this.description = description
        }
        if (valide) {
            this.valide = valide
        }
        if (image) {
            this.image = image
        }
        if (datePublication) {
            this.datePublication = datePublication
        }
        if (dateExpiration) {
            this.dateExpiration = dateExpiration;
        }
        if (utilisateur) {
            this.utilisateur = utilisateur
        }
        if (commentaires) {
            this.commentaires = commentaires;
        }
        if (categorie) {
            this.categorie = categorie
        }

    }
}
