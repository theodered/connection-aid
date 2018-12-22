import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { StoryRoutingModule } from './stories.routing';

@NgModule({
  imports: [
    CommonModule, StoryRoutingModule
  ],
  declarations: [ViewContainerComponent]
})
export class StoriesModule { }
