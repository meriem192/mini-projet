import { Routes } from '@angular/router';
import { HomeComponent } from './front_office/home/home.component';
import { ErrorComponent } from './error/error.component';
import { AuthentifierComponent } from './back_office/authentifier/authentifier.component';
import { HomeBackComponent } from './back_office/home-back/home-back.component';
import { DetailProduitComponent } from './front_office/detail-produit/detail-produit.component';
import { NavBackComponent } from './back_office/nav-back/nav-back.component';

export const routes: Routes =
 [
    {path:'home',title:"home", component:HomeComponent},
    {path: 'DetailsProduit/:id',title:"Détail du produit", component:DetailProduitComponent},
    {path:'authentification',title:"authentification", component:AuthentifierComponent},
    {path:'menuBack',title:"manuBack", component:NavBackComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'homeBack',title:"homeBack", component:HomeBackComponent},
    {path:'**',title:'error',component:ErrorComponent}

    
 ];
