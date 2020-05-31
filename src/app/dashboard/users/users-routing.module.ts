import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {path: '', component: UserlistComponent},
  {path: 'createuser', component: CreateuserComponent},
  {path: 'userprofile', component: UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
