import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-learning-module-branche',
  imports: [
    NgForOf,
    MatIcon
  ],
  templateUrl: './learning-module-branche.component.html',
  styleUrl: './learning-module-branche.component.scss'
})
export class LearningModuleBrancheComponent {

  brancheList: string[] = ["IT", "Pflege", "Maschinenbau"];

}
