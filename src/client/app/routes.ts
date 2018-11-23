import { Routes } from '@angular/router';
import { LoginFrontPageComponent } from './login-front-page/login-front-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './property/property.component';
import { BuildingComponent } from './building/building.component';

export const appRoutes: Routes = [
    {path: 'home', component: LoginFrontPageComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'building/:id', component: BuildingComponent},
    {path: 'property/:id', component: PropertyComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];


