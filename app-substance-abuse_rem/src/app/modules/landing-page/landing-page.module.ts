import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { landingPageRouteModule } from './landing-page.routing';
import { ButtonModule } from 'primeng/button'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    landingPageRouteModule
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
