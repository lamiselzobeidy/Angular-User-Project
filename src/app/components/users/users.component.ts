import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  template:`<app-user-profile [users] = "users"></app-user-profile>`,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];


  constructor() { }

  ngOnInit(): void {
    this.users= [
      {
        id:1,
        firstname:'lamis',
        email: 'lamis@gmail.com',
        age:23
      },
      {
        id:2,
        firstname:'mariam',
        email: 'mariam@gmail.com',
        age:23
      },
      {
        id:3,
        firstname:'nour',
        email: 'nour@gmail.com',
        age:23
      }
    ]
  }
  activeuser:User;
  selectUser(user) {
    this.activeuser = user;
    console.log(this.activeuser);
  }
}
