import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public productList:any = [
    {
      "product_id":1,
      "product_image":"../../assets/images/cucumber_coconut-soap_1024x1024.jpg",
      "product_name":"Cucumber Soup Clear Face Wash",
      "brand":"Himalaya",
      "price":70,
      "ordered_qty":1,
      "purchased":false
    },
    {
      "product_id":2,
      "product_image":"../../assets/images/51FWF0DVBaL._SX425_.jpg",
      "product_name":"Ponds White Beauty",
      "brand":"Ponds",
      "price":150,
      "ordered_qty":1,
      "purchased":false
    }
  ];

  public filterState:string = null;

  constructor(private common:CommonService, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }


  public addProduct(item:any)
  {
    if(item)
    {
      item.purchased = true;
      this.common.purchasingProducts.push(item);
    }
  }

  public addQuantity(product:any)
  {
    if(product)
    {
      product.ordered_qty  = product.ordered_qty + 1;
    }
    
  }

  public minusQuantity(product)
  {
    if(product)
    {
      if(product.ordered_qty > 1)
      {
        product.ordered_qty  = product.ordered_qty - 1;
      }
    }
  }

  public moveToConfirmation()
  {
    console.log(this.common.purchasingProducts);
  }


  // Filter Action Select

  public async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Filter',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Search',
        icon: 'search',
        handler: () => {
          this.filterState = 'Search';
        }
      }, {
        text: 'Category',
        icon: 'filter',
        handler: () => {
          this.filterState = 'Category';
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
