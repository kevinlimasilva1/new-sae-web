import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'src/app/controls/menu/menu.module';
import { DiagHomeRoutingModule } from './diag-home.routing.module';
import { DiagHomeComponent } from './diag-home.component';
import { DiagDominionComponent } from '../diag-dominion/diag-dominion.component';
import { DiagClassComponent } from '../diag-class/diag-class.component';
import { DiagDescriptionComponent } from '../diag-description/diag-description.component';
import { DiagClassCreateEditComponent } from '../diag-class-create-edit/diag-class-create-edit.component';
import { DiagDominionCreateEditComponent } from '../diag-dominion-create-edit/diag-dominion-create-edit.component';
import { DiagCreateEditComponent } from '../diag-create-edit/diag-create-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    DiagHomeRoutingModule
  ],
  declarations: [
    DiagHomeComponent,
    DiagDominionComponent,
    DiagClassComponent,
    DiagDescriptionComponent,
    DiagClassCreateEditComponent,
    DiagDominionCreateEditComponent,
    DiagCreateEditComponent,
  ]
})

export class DiagHomeModule { }
