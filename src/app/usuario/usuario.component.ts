import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public listUsuario: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.carregaListaDeUsuarios();
  }

  public excluir(id: number) : void {
    this.usuarioService.excluir(id).subscribe(response => {
      console.log('Usuário excluido com sucesso!');
      this.carregaListaDeUsuarios();
    },
    erro => { console.log('Erro ao excluir usuario: ' + erro); }
    );
  }

  private carregaListaDeUsuarios() : void {
    this.usuarioService.getUsuario().subscribe(
      response => { 
        // console.log(response),
        this.listUsuario = response
      },
      erro => { console.log(erro); }
    );
  }
}
