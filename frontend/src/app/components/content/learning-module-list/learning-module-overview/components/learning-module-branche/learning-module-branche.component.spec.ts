import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningModuleBrancheComponent } from './learning-module-branche.component';

describe('LearningModuleBrancheComponent', () => {
  let component: LearningModuleBrancheComponent;
  let fixture: ComponentFixture<LearningModuleBrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningModuleBrancheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningModuleBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
