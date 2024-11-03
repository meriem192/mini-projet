import { Component, inject, OnInit } from '@angular/core';

import { ProduitComponent } from '../produit/produit.component';
import { Produit } from '../../model/produit';
import { ProduitService } from '../../service/produit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProduitComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})  
export class HomeComponent implements OnInit {


  produits:Produit[]=[];
  private produitService:ProduitService=inject(ProduitService);
  ngOnInit(): void {
    this.produits=this.produitService.getProduits();
  }
  
  
    

}