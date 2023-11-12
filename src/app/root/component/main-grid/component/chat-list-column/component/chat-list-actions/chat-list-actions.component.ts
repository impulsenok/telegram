import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'chat-list-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list-actions.component.html',
  styleUrls: ['./chat-list-actions.component.scss'],
})
export class ChatListActionsComponent {}
