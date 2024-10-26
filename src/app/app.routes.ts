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
  {path: '', component: HomeComponent,},
  {path: 'über-uns', component: AboutUsComponent},
  {path: 'fahrzeuge', component: CarsComponent},
  {path: 'verkaufen', component: SellComponent},
  {path: 'transport', component: TransportComponent},
  {path: 'akzeptieren', component: AcceptComponent},
  {path: 'datenschutz', component: PrivacyPolicyComponent},
  {path: 'impressum', component: ImprintComponent},
  {path: '**', redirectTo: '/'}
];
