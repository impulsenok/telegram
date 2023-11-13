import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatItemMessagePreviewComponent } from './chat-item-message-preview.component';

describe('ChatItemMessagePreviewComponent', () => {
  let component: ChatItemMessagePreviewComponent;
  let fixture: ComponentFixture<ChatItemMessagePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatItemMessagePreviewComponent]
    });
    fixture = TestBed.createComponent(ChatItemMessagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
