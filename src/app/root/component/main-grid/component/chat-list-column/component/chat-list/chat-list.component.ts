import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chat } from 'src/app/models/chat.model';
import { ChatItemComponent } from './component/chat-item/chat-item.component';

@Component({
  selector: 'chat-list',
  standalone: true,
  imports: [CommonModule, ChatItemComponent],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent {
  public dumbChatList$: Observable<Chat[]> = of([
    {
      id: 1,
      title: 'Alex Sergio',
    },
    {
      id: 2,
      title: 'Bob Spenser',
    },
    {
      id: 3,
      title: 'Felix Stone',
    },
    {
      id: 4,
      title: 'John Davidson',
    },
    {
      id: 5,
      title: 'Eva Brown',
    },
    {
      id: 6,
      title: 'Mickey Mouse',
    },
    {
      id: 7,
      title: 'Donald Trump',
    },
    {
      id: 8,
      title: 'Willy Won',
    },
  ]);
}
