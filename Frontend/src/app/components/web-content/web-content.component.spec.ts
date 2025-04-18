import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebContentComponent } from './web-content.component';

describe('WebContentComponent', () => {
  let component: WebContentComponent;
  let fixture: ComponentFixture<WebContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
