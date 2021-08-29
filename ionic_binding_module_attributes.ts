============ app.module.ts ===============

import { FormsModule } from '@angular/forms';

@NgModule({
    [...]
    imports: [BrowserModule, FormsModule ,....],
    [...]
  })

  ========== component.ts =============

  export class LoginFormComponent implements OnInit {

    login: string;
    password: string;
    
      constructor(private router: Router) { }
        
      autenticate(){
        console.log(this.login, this.password);
      }
    }

======== component.html ==============
<ion-item>
<ion-label position="stacked" color="primary">login</ion-label>
<ion-input placeholder="Enter your login" [(ngModel)]="login" name="login"></ion-input> 
</ion-item>

<ion-item>
<ion-label position="stacked" color="primary">Password</ion-label>
<ion-input type="password" placeholder="Enter your password"  [(ngModel)]="password"></ion-input>
</ion-item>


<ion-button fill="outline" (click)="autenticate()">Authenticate</ion-button>