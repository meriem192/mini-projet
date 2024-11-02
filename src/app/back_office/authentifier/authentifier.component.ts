import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentifier',
  standalone: true,
  imports: [],
  templateUrl: './authentifier.component.html',
  styleUrl: './authentifier.component.css'
})
export class AuthentifierComponent {
  router:Router=inject(Router);
  onreturnhome()
  {
    this.router.navigate(['/home']);  
  }
  ongoback_office(x:string)
  {
    if(x=="ADMIN")
    {
      this.router.navigate(['/homeBack']);
    }
  }

}
