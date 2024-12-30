import {Routes} from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomeComponent} from "./home/home.component";
import {CarsComponent} from "./cars/cars.component";
import {SellComponent} from "./sell/sell.component";
import {TransportComponent} from "./transport/transport.component";
import {AcceptComponent} from "./transport/accept/accept.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {ImprintComponent} from "./imprint/imprint.component";

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
