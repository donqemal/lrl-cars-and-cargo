import {Routes} from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomeComponent} from "./home/home.component";
import {BuyComponent} from "./buy/buy.component";
import {SellComponent} from "./sell/sell.component";

export const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'über-uns', component: AboutUsComponent},
  {path: 'verkaufen', component: SellComponent},
  {path: 'kaufen', component: BuyComponent}
];
