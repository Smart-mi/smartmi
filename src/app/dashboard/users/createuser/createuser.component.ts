import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  public companyList;
  public userList;
  public selectedAssCom = 'Assigned Companies*';
  public asscompanyList = [];
  public confirmPasssword;
  public saveFlag;
  public user = {
    name: null,
    company: 'Company*',
    assignedcompany: null,
    designation: 'Designation*',
    department: 'Department*',
    reportingto: 'Reporting to*',
    role: 'Role*',
    employeecode: null,
    mobile: null,
    telephone: null,
    email: null,
    username: null,
    password: null,
    image: null,
    active: false
  };

  constructor(private companyservice: CompanyService,
              private userservice: UserService,
              private toastservice: ToastrService
              ) { }

  ngOnInit() {
    this.getCompanyList();
    this.getUserList();
  }
  async save() {
    const respdata = await this.userservice.addUser(this.user);
    this.toastservice.success('user added successfully', 'Success');
  }
  validatefields() {
    if ( this.user.name !== null &&  this.user.employeecode !== null &&
         this.user.company !== 'Company*' && this.user.assignedcompany !== 'Assigned Companies*' &&
         this.user.designation !== 'Designation*' && this.user.department !== 'Department*' &&
         this.user.reportingto !== 'Reporting to*' && this.user.role !== 'Role*' &&
         this.user.mobile !== null && this.user.email !== null &&
         this.user.username !== null && this.user.password !== null && this.user.password === this.confirmPasssword) {
      this.saveFlag = true;
      console.log(this.user);
      console.log(this.saveFlag);
    } else {
      this.saveFlag = false;
      console.log(this.user);
      console.log(this.saveFlag);
    }
  }
  getCompanyList() {
    this.companyservice.getAllCompany().subscribe(data => this.companyList = data);
  }
  async getUserList() {
    this.userList = await this.userservice.getAllUser();
  }
  fileupload(event) {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => reader.readAsDataURL(image);
    this.user.image = reader.result;
  }
  update() {
    const newCompny = this.companyList[this.selectedAssCom];
    this.companyList.splice(this.selectedAssCom, 1);
    this.asscompanyList.push(newCompny);
    this.user.assignedcompany = this.asscompanyList;
  }
  delete(index, data) {
    this.user.assignedcompany.splice(index, 1);
    this.companyList.push(data);
  }

}
