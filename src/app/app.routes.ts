import {Routes} from '@angular/router';
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {HomeComponent} from "./pages/home/home.component";
import {CarsComponent} from "./pages/cars/cars.component";
import {SellComponent} from "./pages/sell/sell.component";
import {TransportComponent} from "./pages/transport/transport.component";
import {AcceptComponent} from "./pages/transport/accept/accept.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {ImprintComponent} from "./pages/imprint/imprint.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'über-uns', component: AboutUsComponent, data: {animation: 'AboutUsPage'}},
  {path: 'fahrzeuge', component: CarsComponent, data: {animation: 'CarsPage'}},
  {path: 'verkaufen', component: SellComponent, data: {animation: 'SellPage'}},
  {path: 'transport', component: TransportComponent, data: {animation: 'TransportPage'}},
  {path: 'akzeptieren', component: AcceptComponent, data: {animation: 'AcceptPage'}},
  {path: 'datenschutz', component: PrivacyPolicyComponent, data: {animation: 'PrivacyPolicyPage'}},
  {path: 'impressum', component: ImprintComponent, data: {animation: 'ImprintPage'}},
  {path: '**', redirectTo: '/'}
];
