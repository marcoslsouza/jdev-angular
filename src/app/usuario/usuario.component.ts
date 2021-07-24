import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(
      response => { console.log(response); },
      erro => { console.log('Erro'); }
    );
  }

}