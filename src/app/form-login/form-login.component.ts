import { Component, OnInit } from '@angular/core';

import { FormLogin } from './form-login.model';
import { FormLoginService } from './form-login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public titulo: string = 'Login do Sistema';
  public formLogin: FormLogin = new FormLogin();
 
  constructor(private formLoginService: FormLoginService) { }

  ngOnInit(): void {
  }

  public realizaLogin(): any {
    console.log('Login: ' + this.formLogin.login + ' | ' + 'Senha: ' + this.formLogin.senha);
    this.formLoginService.login(this.formLogin).subscribe(data => {
      // O retorno é em string. Converte em JSON "JSON.parse(JSON.stringify(data))"
      let token = data.Authorization.replace('Bearer ', '');

      // Armazenar o token no browser
      localStorage.setItem('token', token);

      // console.info(localStorage.getItem('token'));
    },
    error => {
      console.error('Erro ao fazer o login');
    });
  }
}
