import { Routes } from "@angular/router";

export const Approutes: Routes = [
     { path: '', redirectTo: '/home',pathMatch: 'full' },
     { path: 'home', loadChildren: './modules/landing-page/landing-page.module#LandingPageModule' },
     { path: 'education', loadChildren: './modules/education/education.module#EducationModule' },
     { path: 'chat', loadChildren: './modules/chat/chat.module#ChatModule' },
     { path: 'stories', loadChildren: './modules/stories/stories.module#StoriesModule' },
     { path: '**', loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule' }

];