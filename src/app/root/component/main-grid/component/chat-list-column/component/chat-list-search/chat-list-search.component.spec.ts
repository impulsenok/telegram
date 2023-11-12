import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListSearchComponent } from './chat-list-search.component';

describe('ChatListSearchComponent', () => {
  let component: ChatListSearchComponent;
  let fixture: ComponentFixture<ChatListSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatListSearchComponent]
    });
    fixture = TestBed.createComponent(ChatListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
