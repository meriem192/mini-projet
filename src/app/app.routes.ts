import { Routes } from '@angular/router';
import { HomeComponent } from './front_office/home/home.component';
import { ErrorComponent } from './error/error.component';
import { AuthentifierComponent } from './back_office/authentifier/authentifier.component';
import { HomeBackComponent } from './back_office/home-back/home-back.component';
import { DetailProduitComponent } from './front_office/detail-produit/detail-produit.component';
import { NavBackComponent } from './back_office/nav-back/nav-back.component';
import { FrontPrincComponent } from './front_office/front-princ/front-princ.component';
import { BackPrincComponent } from './back_office/back-princ/back-princ.component';

export const routes: Routes =
   [{
      path: 'front_princ', component: FrontPrincComponent,
      children: [
         { path: 'home', component: HomeComponent },
         { path: 'DetailsProduit/:id', component: DetailProduitComponent },
         { path: 'authentifier', component: AuthentifierComponent }

      ]
   },
   {
      path: 'back-princ', component: BackPrincComponent,
      children: [
         { path: 'navBack', component: NavBackComponent },
         { path: 'homeBack', component: HomeBackComponent }]
   },
   { path: 'front_princ/home', title: "front_princ/home", component: HomeComponent },
   { path: 'front_princ/DetailsProduit/:id', title: "Détail du produit", component: DetailProduitComponent },
   { path: 'authentification', title: "authentification", component: AuthentifierComponent },
   { path: 'menuBack', title: "manuBack", component: NavBackComponent },
   { path: '', redirectTo: 'front_princ/home', pathMatch: 'full' },
   { path: 'homeBack', title: "homeBack", component: HomeBackComponent },
   { path: '**', title: 'error', component: ErrorComponent }


   ];
