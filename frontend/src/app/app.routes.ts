import { Routes } from '@angular/router';
import {LandingPageComponent} from './sites/landing-page/landing-page.component';
import {URLRoutes} from '../_constants/routes';
import {ImprintComponent} from './sites/imprint/imprint.component';
import {PrivacyPolicyComponent} from './sites/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {path: URLRoutes.IMPRINT, component: ImprintComponent},
  {path: URLRoutes.PRIVACY_POLICY, component: PrivacyPolicyComponent},
  {path: "**", component: LandingPageComponent},
];
