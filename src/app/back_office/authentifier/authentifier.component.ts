import { Component,inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-authentifier',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatIconModule],
  templateUrl: './authentifier.component.html',
  styleUrl: './authentifier.component.css'
})
export class AuthentifierComponent {
 
    
  
    hide = signal(true);
    clickEvent(event: MouseEvent) {
      this.hide.set(!this.hide());
      event.stopPropagation();
    }
    router:Router=inject(Router);
    onreturnhome()
    {
      this.router.navigate(['/front_princ/home']);  
    }
    x:boolean=true;
    ongoback_office(x:string)
    {
      if(x=="ADMIN")
      {
        this.router.navigate(['/back-princ/homeBack']);
       
      }
    }

}
