import {Routes} from '@angular/router';
import {HomeComponent} from "./features/home/components/home/home.component";
import {UserComponent} from "./features/user/components/user/user.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent}
];
