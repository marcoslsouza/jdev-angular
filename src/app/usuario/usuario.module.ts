import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioService } from './usuario.service';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
