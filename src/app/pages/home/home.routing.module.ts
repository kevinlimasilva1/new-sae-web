import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { PresHomeComponent } from './../prescription-page/pres-home/pres-home.component';
import { EvolHomeComponent } from '../evolution-page/evol-home/evol-home.component';
import { DiagHomeComponent } from '../diagnostic-page/diag-home/diag-home.component';
import { ExamHomeComponent } from './../exam-page/exam-home/exam-home.component';

const homeRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'prescription', component: PresHomeComponent },
    { path: 'exam', component: ExamHomeComponent },
    { path: 'evolution', component: EvolHomeComponent },
    { path: 'diagnostic', component: DiagHomeComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(homeRoutes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}
