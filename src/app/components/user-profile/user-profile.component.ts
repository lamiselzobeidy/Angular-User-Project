import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersComponent } from '../users/users.component'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements AfterViewInit {
  @ViewChild(UsersComponent) users;
  userss:User[];
  lamis:string;
  constructor() { 
    this.lamis = "lamis"
  }
  ngAfterViewInit() {
    this.userss = this.users.users;
    
  }

}
