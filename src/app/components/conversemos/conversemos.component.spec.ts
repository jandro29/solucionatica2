import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversemosComponent } from './conversemos.component';

describe('ConversemosComponent', () => {
  let component: ConversemosComponent;
  let fixture: ComponentFixture<ConversemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
