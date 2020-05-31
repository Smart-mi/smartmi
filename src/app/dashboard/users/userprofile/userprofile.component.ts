import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public userDetails;
  public tabList = [
    {name: 'Dashboard', key: 1},
    {name: 'Account & Profile', key: 1},
    {name: 'Activities', key: 1},
    {name: 'Schedules & Tasks', key: 1}
  ];

  constructor(private router: Router) {
    this.userDetails = router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    console.log(this.userDetails);
  }

}
