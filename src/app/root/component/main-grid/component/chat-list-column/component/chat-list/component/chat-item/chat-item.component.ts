import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';

@Component({
  selector: 'chat-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent {
  @Input()
  chatItem!: Chat;
}
