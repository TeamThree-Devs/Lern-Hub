import { Component } from '@angular/core';
import {LearningModuleComponent} from './components/learning-module/learning-module.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-learning-module-overview',
  imports: [
    LearningModuleComponent,
    NgForOf
  ],
  templateUrl: './learning-module-overview.component.html',
  styleUrl: './learning-module-overview.component.scss'
})
export class LearningModuleOverviewComponent {

}
