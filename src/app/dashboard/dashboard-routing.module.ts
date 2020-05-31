import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadcreateComponent } from './leadcreate/leadcreate.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreatequoteComponent } from './createquote/createquote.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'leads', component: LeadsComponent},
    {path: 'createlead', component: LeadcreateComponent},
    {path: 'quotes', component: QuotesComponent},
    {path: 'createquote', component: CreatequoteComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'general', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)},
    {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
        {path: '', redirectTo: 'general', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
