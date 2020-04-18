import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] =[];
  constructor() { 
  }

  getUsers(){
    return this.users;
  }
  setUsers(user){
    this.users.push(user);
  }
}
