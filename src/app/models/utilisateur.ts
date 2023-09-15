import { Annonce } from "./annonce";
import { Commentaire } from "./commentaire";
import { Role } from "./role";

export class Utilisateur {
    id!: number;
    username!: string;
    password!: string;
    nom!: string;
    prenom!: string;
    mail!: string;
    bloque!: boolean;
    annonces!: Annonce[];
    commentaires!: Commentaire[];
    role: Role = new Role();

    constructor(id?: number,
        username?: string,
        password?: string,
        nom?: string,
        prenom?: string,
        mail?: string,
        bloque?: boolean,
        annonces?: Annonce[],
        commentaires?: Commentaire[],
        role?: Role) {

        if (id) {
            this.id = id
        }
        if (username) {
            this.username = username
        }
        if (password) {
            this.password = password
        }
        if (nom) {
            this.nom = nom
        }
        if (prenom) {
            this.prenom = prenom
        }
        if (mail) {
            this.mail = mail
        }
        if (bloque) {
            this.bloque = bloque;
        }
        if (annonces) {
            this.annonces = annonces
        }
        if (commentaires) {
            this.commentaires = commentaires;
        }
        if (role) {
            this.role = role
        }

    }
}

