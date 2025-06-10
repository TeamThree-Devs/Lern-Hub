import { Component } from '@angular/core';
import {LearningModuleComponent} from './components/learning-module/learning-module.component';
import {LearningModuleBrancheComponent} from './components/learning-module-branche/learning-module-branche.component';

@Component({
  selector: 'app-learning-module-overview',
  imports: [
    LearningModuleComponent,
    LearningModuleBrancheComponent,
  ],
  templateUrl: './learning-module-overview.component.html',
  styleUrl: './learning-module-overview.component.scss'
})
export class LearningModuleOverviewComponent {

}
