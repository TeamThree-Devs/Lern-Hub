import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {URLRoutes} from '../../../_constants/routes';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink
  ],
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  protected readonly URLRoutes = URLRoutes;
}
