import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLineComponent } from './header-line.component';

describe('HeaderLineComponent', () => {
  let component: HeaderLineComponent;
  let fixture: ComponentFixture<HeaderLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderLineComponent]
    });
    fixture = TestBed.createComponent(HeaderLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
