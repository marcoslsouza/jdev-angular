import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from './usuarios/usuario.component';
import { FormsModule } from '@angular/forms';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { UsuarioService } from './usuario.service';
import { ConfirmExcluirComponent } from '../confirm-excluir/confirm-excluir.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioAddComponent,
    ConfirmExcluirComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ConfirmExcluirComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
