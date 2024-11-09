import { Component } from '@angular/core';
import { MenuComponent } from "../../menu/menu.component";
import { HomeComponent } from "../home/home.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-princ',
  standalone: true,
  imports: [MenuComponent, HomeComponent,RouterOutlet],
  templateUrl: './front-princ.component.html',
  styleUrl: './front-princ.component.css'
})
export class FrontPrincComponent {

}
