import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFolderColumnComponent } from './chat-folder-column.component';

describe('ChatFolderColumnComponent', () => {
  let component: ChatFolderColumnComponent;
  let fixture: ComponentFixture<ChatFolderColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatFolderColumnComponent]
    });
    fixture = TestBed.createComponent(ChatFolderColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
