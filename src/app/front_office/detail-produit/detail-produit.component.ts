import { Component,inject } from '@angular/core';
import { Produit } from '../../model/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../service/produit.service';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [],
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css'
})
export class DetailProduitComponent {
  idProduit!:string;
  produits:Produit[]=[];
  produitSelectionne!:Produit;
  private produitService:ProduitService=inject(ProduitService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router:Router=inject(Router);
   ngOnInit(): void {
     this.produits=this.produitService.getProduits();
     this.idProduit = this.activatedRoute.snapshot.params['id'];
     this.produitSelectionne = this.getProduitById(this.idProduit);

   }
    getProduitById(id:string): Produit {
    return this.produits.find((p) => p.id == id)!;
  }
  test:boolean=false;
   onAfficher() {
   this.test=!this.test;
    }
  
    navigateToHome() {
      this.router.navigate(['/home']);
      }
 

}
