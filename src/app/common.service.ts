import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import config from  '../assets/config/config.json'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public purchasingProducts:any = [];
  public profileData:any = {};
  // public URLs:any = config;

  constructor(private router:Router) { 
    // console.log(this.URLs)
  }

  public moveToPage(page:string)
  {
    this.router.navigate(['/'+page]);
  }
 
}
