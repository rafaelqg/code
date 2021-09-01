https://forum.ionicframework.com/t/create-ion-card-using-ngfor/163760
//component.ts
export class LoginFormComponent implements OnInit {

    accountTypes: Array<any>;
    
      constructor() { 
        this.accountTypes=[
          {name:"Premium", description:"Online support 24/7 basis"},
          {name:"Enterprise", description:"E-mail and chat support"},
          {name:"Standard", description:"Free access to online services"}
        ];
      }
}
//componente .html
<ion-card *ngFor="let type of accountTypes">
  <b>{{type.name}}</b><br/>
  <div>
    {{type.description}}
  </div>
</ion-card>
