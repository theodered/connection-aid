import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { TherapistsRoutingModule } from './therapists.routing';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    TherapistsRoutingModule,
    CardModule,
    MenuModule,
    InputTextareaModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  declarations: [ViewContainerComponent]
})
export class TherapistsModule { }
