import { Commentaire } from './commentaire';
export class Produit {
  constructor(
    public id: string,
    public nom: string,
    public photo: string,
    public prix: number,
    public enStock: boolean,
    public dateAjout: Date,
    public comments: Commentaire[],
    public categorie: string,
    public description: string,

  ) {}
}