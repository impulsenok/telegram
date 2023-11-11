import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'chat-list-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list-column.component.html',
  styleUrls: ['./chat-list-column.component.scss'],
})
export class ChatListColumnComponent {}
