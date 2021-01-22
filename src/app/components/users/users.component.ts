import {Component, OnInit} from '@angular/core';
import {users} from '../../../data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users = users;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.users);
  }

}
