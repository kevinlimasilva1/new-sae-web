import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from './../../../controls/menu/menu.module';
import { PresHomeRoutingModule } from './pres-home.routing.module';
import { PresHomeComponent } from './pres-home.component';
import { PresDescriptionComponent } from './../pres-description/pres-description.component';
import { PresCreateEditComponent } from './../pres-create-edit/pres-create-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    PresHomeRoutingModule
  ],
  declarations: [
    PresHomeComponent,
    PresDescriptionComponent,
    PresCreateEditComponent
  ]
})

export class PresHomeModule { }
