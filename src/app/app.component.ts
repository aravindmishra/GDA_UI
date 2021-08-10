import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CommonService } from './common.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,private common:CommonService, public alertController: AlertController) {}

  public openMenuRouter(link:string) {
    this.common.moveToPage(link)
    this.menu.close();
  }

  public  async logoutAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout Confirm!',
      message: 'Are you sure..',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.openMenuRouter('login')
          }
        }
      ]
    });

    await alert.present();
    
  }
}
