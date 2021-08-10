import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })

  constructor(private common:CommonService) { }

  ngOnInit() {
  }

}
