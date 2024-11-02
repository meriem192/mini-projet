import { Component,inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitService } from '../../service/produit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produit!:Produit[];
  produitservice:ProduitService=inject(ProduitService);
  ngOnInit(): void {
      this.produit=this.produitservice.getProduit();
  }


}
