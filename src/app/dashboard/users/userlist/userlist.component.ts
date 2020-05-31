import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public userList;

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.getAllUser();
  }
  navigate(path) {
    this.router.navigate([path]);
  }
  async getAllUser() {
    this.userList = await this.userservice.getAllUser();
  }

}
