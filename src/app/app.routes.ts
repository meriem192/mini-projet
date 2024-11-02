import { Routes } from '@angular/router';
import { HomeComponent } from './front_office/home/home.component';
import { ErrorComponent } from './error/error.component';
import { AuthentifierComponent } from './back_office/authentifier/authentifier.component';

export const routes: Routes =
 [
    {path:'home',title:"home", component:HomeComponent},
    {path:'authentifier',title:"authentifier", component:AuthentifierComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',title:'error',component:ErrorComponent}

    
 ];
