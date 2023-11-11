import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListColumnComponent } from './chat-list-column.component';

describe('ChatListColumnComponent', () => {
  let component: ChatListColumnComponent;
  let fixture: ComponentFixture<ChatListColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatListColumnComponent]
    });
    fixture = TestBed.createComponent(ChatListColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
