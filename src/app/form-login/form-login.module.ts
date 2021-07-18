import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login.component';

@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormLoginComponent
  ]
})
export class FormLoginModule { 

}
