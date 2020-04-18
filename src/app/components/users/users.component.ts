import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../models/User'
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  template:`<app-user-profile [users] = "users"></app-user-profile>`,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];


  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.users= this._userService.getUsers();
  }
  activeuser:User;
  selectUser(user) {
    console.log(this.users);
    this.activeuser = user;
    console.log(this.activeuser);
  }
}
