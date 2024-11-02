import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { Commentaire } from '../model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produit :Produit[]=
  [
    new Produit(
      '1',
      'Souris Logitech',
      'assets/images/souris-logitech.jpg',
      20,
      true,
      new Date(2024, 9, 1),
      [new Commentaire('Alice', 'Bonne qualité')],
      'Souris'
    ),
    new Produit(
      '2',
      'Souris HP',
      'assets/images/souris-hp.jpg',
      15,
      false,
      new Date(2024, 8, 20),
      [new Commentaire('Bob', 'Confortable à utiliser')],
      'Souris'
    ),
    new Produit(
      '3',
      'Baffle JBL',
      'assets/images/baffle-jbl.jpg',
      50,
      true,
      new Date(2024, 7, 10),
      [new Commentaire('Céline', 'Son excellent')],
      'Baffle'
    ),
    new Produit(
      '4',
      'Ordinateur Portable Dell',
      'assets/images/pc-dell.jpg',
      700,
      true,
      new Date(2024, 6, 15),
      [new Commentaire('David', 'Performance élevée')],
      'PC'
    ),
    new Produit(
      '5',
      'Ordinateur Portable HP',
      'assets/images/pc-hp.jpg',
      650,
      false,
      new Date(2024, 5, 25),
      [new Commentaire('Emma', 'Bon rapport qualité/prix')],
      'PC'
    ),
    new Produit(
      '6',
      'Clavier mécanique Corsair',
      'assets/images/clavier-corsair.jpg',
      120,
      true,
      new Date(2024, 9, 5),
      [new Commentaire('Frank', 'Très réactif')],
      'Clavier'
    ),
    new Produit(
      '7',
      'Écran Samsung 24 pouces',
      'assets/images/ecran-samsung.jpg',
      180,
      true,
      new Date(2024, 8, 18),
      [new Commentaire('Grace', 'Image nette')],
      'Écran'
    ),
    new Produit(
      '8',
      'Casque Audio Sony',
      'assets/images/casque-sony.jpg',
      80,
      false,
      new Date(2024, 7, 22),
      [new Commentaire('Hugo', 'Très bon son')],
      'Casque'
    ),
    new Produit(
      '9',
      'Imprimante Canon',
      'assets/images/imprimante-canon.jpg',
      250,
      true,
      new Date(2024, 6, 8),
      [new Commentaire('Isabelle', 'Facile à utiliser')],
      'Imprimante'
    ),
    new Produit(
      '10',
      'Disque Dur Externe Seagate 1TB',
      'assets/images/disque-seagate.jpg',
      60,
      true,
      new Date(2024, 5, 1),
      [new Commentaire('Jack', 'Très rapide')],
      'Disque Dur'
    )
  ];

  constructor() {}

  getProduit(){
    return this.produit;
  }
}
