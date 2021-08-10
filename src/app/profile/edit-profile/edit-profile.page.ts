import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public editForm = new FormGroup({
    "name":new FormControl(),
    "address":new FormControl(),
    "landmark":new FormControl(),
    "email_id":new FormControl(),
    "mobile_no":new FormControl(),
    "password":new FormControl(),
  })

  public newPassword:string;
  constructor(private common:CommonService) { }

  ngOnInit() {
    this.setEditableValue();
  }

  public setEditableValue()
  {
    if(Object.keys(this.common.profileData).length !== 0)
    {
      this.editForm.reset(this.common.profileData);
    }
  }

}
