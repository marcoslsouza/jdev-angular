import { Routes, RouterModule } from '@angular/router'
import { FormLoginComponent } from './form-login/form-login.component';
import { GuardRotasGuard } from './guard-rotas.guard';
import { HomeComponent } from './home/home.component';
import { UsuarioAddComponent } from './usuario/usuario-add/usuario-add.component';
import { UsuarioComponent } from './usuario/usuarios/usuario.component';

const routes: Routes = [
    {
      path: '',
      component: FormLoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [GuardRotasGuard]
    },
    {
      path: 'usuarios',
      component: UsuarioComponent,
      canActivate: [GuardRotasGuard]
    },
    {
      path: 'usuario/add',
      component: UsuarioAddComponent,
      canActivate: [GuardRotasGuard]
    },
    {
      path: 'usuario/add/:id',
      component: UsuarioAddComponent,
      canActivate: [GuardRotasGuard]
    }
];
export const RoutingModule = RouterModule.forRoot(routes);
