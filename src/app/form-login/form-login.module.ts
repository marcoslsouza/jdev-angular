import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login.component';
// Para requisicoes Ajax
import { HttpClientModule } from '@angular/common/http';

import { FormLoginService } from './form-login.service';

@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormLoginComponent
  ],
  providers: [
    FormLoginService
  ]
})
export class FormLoginModule { 

}
