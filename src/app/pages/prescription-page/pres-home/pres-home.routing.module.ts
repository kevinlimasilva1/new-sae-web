import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { PresHomeComponent } from './pres-home.component';
import { PresCreateComponent } from './../pres-create/pres-create.component';

const homeRoutes: Routes = [
    { path: '', component: PresHomeComponent },
    { path: 'create', component: PresCreateComponent }
];

@NgModule ({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})

export class PresHomeRoutingModule {}
