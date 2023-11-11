import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChatFolderColumnComponent } from '../chat-folder-column/chat-folder-column.component';
import { ChatListColumnComponent } from '../chat-list-column/chat-list-column.component';
import { DialogueContainerComponent } from '../dialogue-container/dialogue-container.component';

@Component({
  selector: 'main-grid',
  standalone: true,
  imports: [
    CommonModule,
    ChatListColumnComponent,
    ChatFolderColumnComponent,
    DialogueContainerComponent,
  ],
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
})
export class MainGridComponent {}
