import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsuarioService } from './usuarios/usuario.service';
import { UsuarioComponent } from './usuarios/usuario.component';
import { FormsModule } from '@angular/forms';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
