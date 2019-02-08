import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeModule } from './pages/home/home.module';
import { LoginComponent } from './controls/login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => HomeModule },
    { path: 'login', component: LoginComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
