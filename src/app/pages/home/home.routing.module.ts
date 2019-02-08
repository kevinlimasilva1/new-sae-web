import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { EvolHomeComponent } from '../evolution-page/evol-home/evol-home.component';
import { ExamHomeComponent } from './../exam-page/exam-home/exam-home.component';
import { PresHomeModule } from './../prescription-page/pres-home/pres-home.module';
import { DiagHomeModule } from '../diagnostic-page/diag-home/diag-home.module';

const homeRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'prescription',
        loadChildren: () => PresHomeModule
    },
    { path: 'exam', component: ExamHomeComponent },
    { path: 'evolution', component: EvolHomeComponent },
    {
        path: 'diagnostic',
        loadChildren: () => DiagHomeModule
    },
];

@NgModule ({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}
