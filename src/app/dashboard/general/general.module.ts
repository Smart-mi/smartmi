import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { CompaniesComponent } from './companies/companies.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { ProductsComponent } from './products/products.component';
import { UnitsComponent } from './products/units/units.component';
import { ManufaturesComponent } from './products/manufatures/manufatures.component';
import { AngularMaterial } from 'src/app/CommonModules/MaterialModules';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [GeneralComponent, CompaniesComponent, CreatecompanyComponent, ProductsComponent, UnitsComponent, ManufaturesComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneralRoutingModule,
    ReactiveFormsModule,
    AngularMaterial
  ]
})
export class GeneralModule { }
