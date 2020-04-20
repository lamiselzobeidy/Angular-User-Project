import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: User[];
  user: User = {
    id: undefined,
    firstname: undefined,
    email: undefined,
    age: undefined
  };

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this._userService.getUsers();

  }
  addUser() {

    console.log(this.users);
    this.user.id = this.users.length;
    this.user.firstname = $("form").find('#exampleInputName').val() + "";
    this.user.email = $("form").find('#exampleInputEmail').val() + "";
    this.user.age = $("form").find('#exampleInputAge').val() + "";
    console.log(this.user);
    this._userService.setUsers(this.user);
  }

}
