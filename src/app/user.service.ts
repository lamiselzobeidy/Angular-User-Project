import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[] = [];
  deletedUser: User;
  constructor() {
  }

  getUsers() {
    return this.users;
  }

  setUsers(user) {
    this.users.push(user);
  }

  deleteUser(user) {
    for (var i = this.users.length - 1; i >= 0; i--) {
      if (this.users[i].firstname == user.firstname) {
        this.users.splice(i, 1);
      }
    }
  }
}
