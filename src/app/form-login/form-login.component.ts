import { Component, OnInit } from '@angular/core';
import { FormLogin } from './form-login.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public titulo: string = 'Login do Sistema';
  public formLogin: FormLogin = new FormLogin();
 
  constructor() { }

  ngOnInit(): void {
  }

  public realizaLogin(): void {
    console.log('Login: ' + this.formLogin.login + ' | ' + 'Senha: ' + this.formLogin.senha);
  }
}
