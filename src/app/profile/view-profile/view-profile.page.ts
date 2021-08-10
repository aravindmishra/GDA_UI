import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.profileData = {
      "profile_id":1,
      "name":"Sivakumar",
      "address":"135,KPM Thottam, Polagam, TR Pattinam",
      "landmark":"Ganesh Bar",
      "email_id":"siva@gmail.com",
      "mobile_no":"8838449680"
    }
  }

  public moveToEdit()
  {
    if("profile_id" in this.common.profileData)
    {
      this.common.moveToPage("edit-profile")
    }
  }
}
