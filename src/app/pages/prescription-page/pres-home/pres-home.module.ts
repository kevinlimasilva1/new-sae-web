import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresHomeRoutingModule } from './pres-home.routing.module';
import { PresHomeComponent } from './pres-home.component';
import { PresCreateComponent } from './../pres-create/pres-create.component';

@NgModule({
  imports: [
    CommonModule,
    PresHomeRoutingModule
  ],
  declarations: [
    PresHomeComponent,
    PresCreateComponent
  ]
})

export class PresHomeModule { }
