import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from './usuarios/usuario.component';
import { FormsModule } from '@angular/forms';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { UsuarioService } from './usuario.service';
import { ConfirmExcluirComponent } from '../confirm-excluir/confirm-excluir.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'; 

export const optionMask: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioAddComponent,
    ConfirmExcluirComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(optionMask)
  ],
  exports: [
    ConfirmExcluirComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
