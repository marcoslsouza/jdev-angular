import { Routes, RouterModule } from '@angular/router'
import { FormLoginComponent } from './form-login/form-login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
const routes: Routes = [
    //home
    {
      path: '',
      component: FormLoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'usuarios',
      component: UsuarioComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);
