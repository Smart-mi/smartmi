import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadcreateComponent } from './leadcreate/leadcreate.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreatequoteComponent } from './createquote/createquote.component';
import { ProductsComponent } from './products/products.component';
import { AngularMaterial } from 'src/app/CommonModules/MaterialModules';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, LeadsComponent, LeadcreateComponent, QuotesComponent, CreatequoteComponent, ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    AngularMaterial
  ]
})
export class DashboardModule { }
