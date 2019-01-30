import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { DiagHomeComponent } from '../diagnostic-page/diag-home/diag-home.component';
import { EvolHomeComponent } from '../evolution-page/evol-home/evol-home.component';
import { ExamHomeComponent } from '../exam-page/exam-home/exam-home.component';
import { PresHomeComponent } from './../prescription-page/pres-home/pres-home.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    DiagHomeComponent,
    EvolHomeComponent,
    ExamHomeComponent,
    PresHomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
