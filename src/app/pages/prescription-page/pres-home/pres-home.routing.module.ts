import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { PresHomeComponent } from './pres-home.component';
import { PresCreateEditComponent } from './../pres-create-edit/pres-create-edit.component';
import { PresDescriptionComponent } from './../pres-description/pres-description.component';

const presRoutes: Routes = [
    { path: '', component: PresHomeComponent },
    { path: ':id', component: PresDescriptionComponent },
    { path: 'create', component: PresCreateEditComponent },
    { path: ':id/edit', component: PresCreateEditComponent }
];

@NgModule ({
    imports: [RouterModule.forChild(presRoutes)],
    exports: [RouterModule]
})

export class PresHomeRoutingModule {}
