// component ts file
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

export class LoginFormComponent implements OnInit {

accountTypes: Array<any>;

  constructor(private toastController: ToastController, private alertController: AlertController) { 
    this.accountTypes=[
      {name:"Premium", description:"Online support 24/7 basis"},
      {name:"Enterprise", description:"E-mail and chat support"},
      {name:"Standard", description:"Free access to online services"}
    ];
  }

  async presentToast(type) {
    const toast = await this.toastController.create({
      message: 'You have choosed '+type.name,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(type) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Account type',
      subHeader: "You have choosed:"+type.name,
      message: type.description,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}

// component html file
<ion-card *ngFor="let type of accountTypes" (click)="presentAlert(type)">
  <b>{{type.name}}</b><br/>
  <div>
    {{type.description}}
  </div>
</ion-card>