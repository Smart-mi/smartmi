import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { CompaniesComponent } from './companies/companies.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: 'home', component: GeneralComponent, children: [
    {path: 'company', component: CompaniesComponent},
    {path: 'productsattributes', component: ProductsComponent},
    {path: '', redirectTo: 'company', pathMatch: 'full'}
  ]},
  {path: 'createcompany', component: CreatecompanyComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
