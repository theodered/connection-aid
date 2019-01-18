import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { RehabRoutingModule } from './rehab.routing';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    RehabRoutingModule,
    OrderModule
  ],
  declarations: [ViewContainerComponent]
})
export class RehabModule { }
