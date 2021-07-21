import { Routes, RouterModule } from '@angular/router'
import { FormLoginComponent } from './form-login/form-login.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
     //home
     {
      path: '',
      component: FormLoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);
