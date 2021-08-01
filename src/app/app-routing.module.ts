import { Routes, RouterModule } from '@angular/router'
import { FormLoginComponent } from './form-login/form-login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioAddComponent } from './usuario/usuario-add/usuario-add.component';
import { UsuarioComponent } from './usuario/usuarios/usuario.component';

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
    },
    {
      path: 'usuario/add',
      component: UsuarioAddComponent
    },
    {
      path: 'usuario/add/:id',
      component: UsuarioAddComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);
