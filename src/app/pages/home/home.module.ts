import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from './../../controls/menu/menu.module';
import { HomeRoutingModule } from './home.routing.module';
import { EvolHomeComponent } from '../evolution-page/evol-home/evol-home.component';
import { ExamHomeComponent } from '../exam-page/exam-home/exam-home.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    EvolHomeComponent,
    ExamHomeComponent
  ]
})

export class HomeModule { }
