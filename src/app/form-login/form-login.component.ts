import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
 
  constructor(private formLoginService: FormLoginService, private router : Router) { }

  ngOnInit(): void {
    // Se existir o token redireciona para home
    if(localStorage.getItem('token') !== null) {
      this.router.navigate(['home']);
    }
  }

  public realizaLogin(): any {
    this.formLoginService.login(this.formLogin).subscribe(data => {
      // O retorno é em string. Converte em JSON "JSON.parse(JSON.stringify(data))"
      let token = data.Authorization.replace('Bearer ', '');

      // Armazenar o token no browser
      localStorage.setItem('token', token);

      // Redireciona para a pagina home
      this.router.navigate(['home']);

      // console.info(localStorage.getItem('token'));
    },
    error => {
      console.error('Erro ao fazer o login');
      alert('Acesso Negado!');
    });
  }
}
