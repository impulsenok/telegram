import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';
import { RoundAvatarComponent } from '../../../../../../../../../common-components/round-avatar/round-avatar.component';
import { ChatItemMessagePreviewComponent } from './component/chat-item-message-preview/chat-item-message-preview.component';

@Component({
  selector: 'chat-item',
  standalone: true,
  imports: [
    CommonModule,
    ChatItemMessagePreviewComponent,
    RoundAvatarComponent,
  ],
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent {
  @Input()
  chatItem!: Chat;
}
