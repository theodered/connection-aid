import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { ChatRoutingModule } from './chat.routing';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [ViewContainerComponent, ContactListComponent, ChatboxComponent, ContactDetailsComponent]
})
export class ChatModule { }
