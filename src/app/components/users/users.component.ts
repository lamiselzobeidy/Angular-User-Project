import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/User'
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  template: `<app-user-profile [users] = "users"></app-user-profile>`,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  deletedUser: User = {
    id: undefined,
    firstname: undefined,
    email: undefined,
    age: undefined
  };
  editedUser: User; 

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.users = this._userService.getUsers();
    this.editedUser = {
      id: undefined,
      firstname: undefined,
      email: undefined,
      age: undefined
    };
  }
  activeuser: User;
  editingUser: User;
  selectUser(user) {
    console.log(this.users);
    this.activeuser = user;
    console.log(this.activeuser);
  }
  deleteUser() {
    this.deletedUser.firstname = $('#profileFirstname').text();
    console.log(this.deletedUser.firstname);
    this._userService.deleteUser(this.deletedUser);
    this.activeuser = undefined;
  }
  editUser(){
    this.editingUser = this.activeuser;
    this.editedUser = this.activeuser;
    console.log(this.editedUser.firstname);
  }

  addeditedUser() {
    // this.editedUser.id = 1;
    console.log(this.editedUser);
    this.editedUser.firstname = $('#editInputName').val() + "";
    this.editedUser.email = $('#editInputEmail').val() + "";
    this.editedUser.age = $('#editInputAge').val() + "";
    console.log(this.editedUser);
    this._userService.updateUser(this.editedUser);
    this.editingUser = undefined;
    this.activeuser = undefined;
  }
}
