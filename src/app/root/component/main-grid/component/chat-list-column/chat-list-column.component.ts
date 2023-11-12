import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChatListSearchComponent } from './component/chat-list-search/chat-list-search.component';
import { ChatListComponent } from './component/chat-list/chat-list.component';
import { ChatListActionsComponent } from './component/chat-list-actions/chat-list-actions.component';

@Component({
  selector: 'chat-list-column',
  standalone: true,
  imports: [CommonModule, ChatListSearchComponent, ChatListComponent, ChatListActionsComponent],
  templateUrl: './chat-list-column.component.html',
  styleUrls: ['./chat-list-column.component.scss'],
})
export class ChatListColumnComponent {}
