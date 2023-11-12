import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListActionsComponent } from './chat-list-actions.component';

describe('ChatListActionsComponent', () => {
  let component: ChatListActionsComponent;
  let fixture: ComponentFixture<ChatListActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatListActionsComponent]
    });
    fixture = TestBed.createComponent(ChatListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
