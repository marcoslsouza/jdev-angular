import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public listUsuario: Usuario[] = [];
  public nome: string = '';
  public idUsuario: number = 0;

  public msgExcluirUsuario = '';
  public titulo: string = 'Excluir - Usuário';
  
  constructor(private usuarioService: UsuarioService, private router : Router) { }

  ngOnInit(): void {
    this.carregaListaDeUsuarios();
  }

  public recebeDadosUsuarioParaExcluir(id: number, nome: string) {
    this.idUsuario = id;
    this.msgExcluirUsuario = `Tem certeza de que deseja excluir o usuário ${nome}?`;
  }

  public excluirUsuario(event: any) : void {

    console.log(this.idUsuario);

    if(event.excluir == 'sim') {
    
      if(this.idUsuario != 0) {
        this.usuarioService.excluir(this.idUsuario).subscribe(response => {
          console.log('Usuário excluido com sucesso!');
          this.carregaListaDeUsuarios();
        },
        erro => { console.log('Erro ao excluir usuario: ' + erro); }
        );
      } else
          console.log('Id usuario: ' + this.idUsuario);
    }
  }

  private carregaListaDeUsuarios() : void {
    this.usuarioService.getUsuario().subscribe(
      response => { 
        console.log(response),
        this.listUsuario = response
      },
      erro => { console.log(erro); }
    );
  }

  public carregaListaDeUsuariosPorNome() : void {
    if(this.nome != '') {
      this.usuarioService.getUsuarioPorNome(this.nome).subscribe(
        response => { 
          //console.log(response),
          this.listUsuario = response
        },
        erro => { console.log(erro); }
      );
    } else
        this.carregaListaDeUsuarios();
  }
}
