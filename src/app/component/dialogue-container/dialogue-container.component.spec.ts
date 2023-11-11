import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueContainerComponent } from './dialogue-container.component';

describe('DialogueContainerComponent', () => {
  let component: DialogueContainerComponent;
  let fixture: ComponentFixture<DialogueContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogueContainerComponent]
    });
    fixture = TestBed.createComponent(DialogueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
