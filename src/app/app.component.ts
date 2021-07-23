import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'jdev-angular';
  token = localStorage.getItem('token');

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    // Se nao tiver token redireciona para o login
    if(this.token == null) {
      this.router.navigate(['']);
    }
  }

  public sair() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
