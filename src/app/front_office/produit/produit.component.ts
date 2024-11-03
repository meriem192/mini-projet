import { Component, Input ,inject} from '@angular/core';
import { Produit } from '../../model/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() p!:Produit;
  
  router:Router=inject(Router);
  onNavigateToDetails(id:string) { 
    this.router.navigate(['/DetailsProduit',id]);

}}
