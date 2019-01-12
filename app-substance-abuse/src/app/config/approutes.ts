import { Routes } from "@angular/router";

export const Approutes: Routes = [
     { path: '', loadChildren: './modules/landing-page/landing-page.module#LandingPageModule' },
     { path: 'education', loadChildren: './modules/education/education.module#EducationModule' },
     { path: '**', loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule' }

];