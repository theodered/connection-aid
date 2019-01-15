import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { EducationRoutingModule } from './education.routing';

@NgModule({
  imports: [
    CommonModule,
    EducationRoutingModule
  ],
  declarations: [ViewContainerComponent]
})
export class EducationModule { }
