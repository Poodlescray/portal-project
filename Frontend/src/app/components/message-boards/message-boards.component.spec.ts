import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoardsComponent } from './message-boards.component';

describe('MessageBoardsComponent', () => {
  let component: MessageBoardsComponent;
  let fixture: ComponentFixture<MessageBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBoardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
