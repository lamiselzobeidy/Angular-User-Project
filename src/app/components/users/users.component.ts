import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];


  constructor() { }

  ngOnInit(): void {
    this.users= [
      {
        id:1,
        firstname:'lamis'
      },
      {
        id:2,
        firstname:'mariam'
      }
    ]
  }

}
