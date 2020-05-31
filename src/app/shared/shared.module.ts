import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PopoverModule } from 'ngx-smart-popover';
import { AngularMaterial } from 'src/app/CommonModules/MaterialModules';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, PopoverModule, RouterModule,AngularMaterial],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class SharedModule {}
