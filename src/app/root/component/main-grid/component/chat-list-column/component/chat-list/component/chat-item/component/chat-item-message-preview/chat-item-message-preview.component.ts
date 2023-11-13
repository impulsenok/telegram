import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-item-message-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-item-message-preview.component.html',
  styleUrls: ['./chat-item-message-preview.component.scss'],
})
export class ChatItemMessagePreviewComponent {
  @Input()
  chatTitle!: string;
}
