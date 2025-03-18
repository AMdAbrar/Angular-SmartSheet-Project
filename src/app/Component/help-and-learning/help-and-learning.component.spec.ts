import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAndLearningComponent } from './help-and-learning.component';

describe('HelpAndLearningComponent', () => {
  let component: HelpAndLearningComponent;
  let fixture: ComponentFixture<HelpAndLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpAndLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpAndLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
