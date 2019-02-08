import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { DiagHomeComponent } from './diag-home.component';
import { DiagCreateEditComponent } from '../diag-create-edit/diag-create-edit.component';
import { DiagDominionComponent } from '../diag-dominion/diag-dominion.component';
import { DiagClassComponent } from '../diag-class/diag-class.component';
import { DiagDescriptionComponent } from '../diag-description/diag-description.component';
import { DiagClassCreateEditComponent } from '../diag-class-create-edit/diag-class-create-edit.component';
import { DiagDominionCreateEditComponent } from '../diag-dominion-create-edit/diag-dominion-create-edit.component';

const diagRoutes: Routes = [
    { path: '', redirectTo: 'dominion', pathMatch: 'full' },
    { path: 'dominion', component: DiagDominionComponent },
    { path: 'dominion/create', component: DiagDominionCreateEditComponent },
    { path: 'dominion/:id/edit', component: DiagDominionCreateEditComponent },
    //
    { path: 'dominion/:id/class', component: DiagClassComponent },
    { path: 'dominion/:id/class/create', component: DiagClassCreateEditComponent },
    { path: 'dominion/:id/class/:id/edit', component: DiagClassCreateEditComponent },
    //
    { path: 'dominion/:id/class/:id/diagnostic', component: DiagHomeComponent },
    { path: 'dominion/:id/class/:id/diagnostic/:id', component: DiagDescriptionComponent },
    { path: 'dominion/:id/class/:id/diagnostic/:id/create', component: DiagCreateEditComponent },
    { path: 'dominion/:id/class/:id/diagnostic/:id/edit', component: DiagCreateEditComponent }
];

@NgModule ({
    imports: [RouterModule.forChild(diagRoutes)],
    exports: [RouterModule]
})

export class DiagHomeRoutingModule {}
