import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningModuleOverviewComponent } from './learning-module-overview.component';

describe('LearningModuleOverviewComponent', () => {
  let component: LearningModuleOverviewComponent;
  let fixture: ComponentFixture<LearningModuleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningModuleOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningModuleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
