import { Routes } from "@angular/router";

export const Approutes: Routes = [
     { path: '', loadChildren: './modules/landing-page/landing-page.module#LandingPageModule' }
];