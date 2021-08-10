import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  public total:number = 0;
  public pageState:string = "confirm"
  constructor(private common:CommonService, public alertController: AlertController) { }

  ngOnInit() {
    this.totalCalculation();
  }


  public removeProduct(item:any)
  {
    if(item)
    {
      let index = this.common.purchasingProducts.indexOf(item)
      if(index > -1)
      {
        item.purchased = false;
        item.ordered_qty = 1;
        this.common.purchasingProducts.splice(index,1);
        this.totalCalculation();
      }
    }
  }

  public totalCalculation()
  {
    if(this.common.purchasingProducts.length > 0)
    {
      // Get Price List.
      let productPrice = this.common.purchasingProducts.map((element:any)=>{
        return element.price * element.ordered_qty;
      });
      // Calculate Total Price.
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      this.total = productPrice.reduce(reducer);
    }
  }


  public placeOrder()
  {
    if(this.common.purchasingProducts.length > 0)
    {
      console.log(this.common.purchasingProducts)
      this.moveToGreetings();
    }
  }

  public moveToGreetings()
  {
    this.common.purchasingProducts.forEach(element => element.purchased = false); 
    this.common.purchasingProducts = [];
    this.pageState = "greeting";
  }

  public  async plcaeOrderAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Order Confirm!',
      message: 'Ready to Place the Order ?',
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
            this.placeOrder();
          }
        }
      ]
    });

    await alert.present();
    
  }

}
