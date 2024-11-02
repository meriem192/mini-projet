import { Component,inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitService } from '../../service/produit.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe],
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
