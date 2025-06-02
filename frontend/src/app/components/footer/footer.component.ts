import { Component } from '@angular/core';
import {URLRoutes} from '../../../_constants/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  protected readonly URLRoutes = URLRoutes;
}
