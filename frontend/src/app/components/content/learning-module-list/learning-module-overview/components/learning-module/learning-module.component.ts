import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {LEARNING_MODULES, LearningModule} from '../../../../../../../_modules/learning-module';

@Component({
  selector: 'app-learning-module-create',
  imports: [
    NgForOf
  ],
  templateUrl: './learning-module.component.html',
  styleUrl: './learning-module.component.scss'
})
export class LearningModuleComponent {

  modules: LearningModule[] = LEARNING_MODULES;
}
