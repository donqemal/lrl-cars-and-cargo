import {Routes} from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'about-us', component: AboutUsComponent},
];
