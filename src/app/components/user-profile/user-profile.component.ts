import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersComponent } from '../users/users.component'
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  users:User[];
  lamis:string;
  constructor(private _userService : UserService) { 
    this.lamis = "lamis"
  }
  ngOnInit() {
    this.users= this._userService.getUsers();
    
  }

}
