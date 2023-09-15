import { Utilisateur } from "./utilisateur";

export class Role {
    id!:number;
    nom!:string;
    utilisateurs!:Utilisateur[];

    constructor(id?:number, nom?:string, utilisateurs?:Utilisateur[]){
        if(id){
            this.id=id
        }
        if (nom) {
            this.nom=nom
        }
       if (utilisateurs) {
        this.utilisateurs=utilisateurs;
    }}
}
