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
  {path: '', component: HomeComponent},
  {path: 'über-uns', component: AboutUsComponent},
  {path: 'fahrzeuge', component: CarsComponent},
  {path: 'verkaufen', component: SellComponent},
  {path: 'transport', component: TransportComponent},
  {path: 'akzeptieren', component: AcceptComponent},
  {path: 'datenschutz', component: PrivacyPolicyComponent},
  {path: 'impressum', component: ImprintComponent},
  {path: '**', redirectTo: '/'}
];
