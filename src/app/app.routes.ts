import {Routes} from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomeComponent} from "./home/home.component";
import {CarsComponent} from "./cars/cars.component";
import {SellComponent} from "./sell/sell.component";
import {TransportComponent} from "./transport/transport.component";

export const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'über-uns', component: AboutUsComponent},
  {path: 'fahrzeuge', component: CarsComponent},
  {path: 'verkaufen', component: SellComponent},
  {path: 'transport', component: TransportComponent}
];
