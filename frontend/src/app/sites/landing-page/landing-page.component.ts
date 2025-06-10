import { Component } from '@angular/core';
import {
  LearningModuleOverviewComponent
} from '../../components/content/learning-module-list/learning-module-overview/learning-module-overview.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [
    LearningModuleOverviewComponent
  ],
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
