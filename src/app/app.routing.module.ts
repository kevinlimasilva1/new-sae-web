import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeModule } from './pages/home/home.module';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => HomeModule }
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
