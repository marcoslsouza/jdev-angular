import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Telefone } from '../telefone';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  private id: number = 0;

  public usuario = new Usuario();
  public op: string = 'salvar';

  public telefones: Telefone[] = [];

  public titulo: string = 'Excluir - Telefone';
  public msgExcluirTelefone = 'Tem certeza de que deseja excluir o telefone?';
  public idTelefoneParaExcluir: number = 0;
  
  // Passa o cabecalho do metodo como string para o componente de dialogo (confirm-excluir)
  //public metodoExcluir: string = 'excluirTelefone(usuario.id)';
  
  constructor(private routeActive: ActivatedRoute, private router: Router, 
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
    this.id = Number(this.routeActive.snapshot.paramMap.get('id'));

    if(this.id != 0) {
      // Carrega dados do usuario
      //console.log('Valor sendo editado: ' + id);
      this.op = 'editar';
      this.usuarioService.getUsuarioPorId(this.id).subscribe(response => {
        console.log(response);
        this.usuario = response;
      },
      erro => { console.log('Erro ao recuperar usuario: ' + erro); }
      );
    } else {

    }
  }

  public salvarAtualizarUsuario(): void {
    if(this.op == 'salvar') {
      this.usuarioService.salvarUsuario(this.usuario).subscribe(response => {
        this.usuario = response;
        this.novo();
      },
      erro => { 
        console.log('Erro ao salvar usuario: ' + erro); }
      );
    } else {
      this.usuarioService.atualizarUsuario(this.usuario).subscribe(response => {
        this.usuario = response;
      },
      erro => { 
        console.log('Erro ao atualizar usuario: ' + erro); }
      );
    }
  }

  public atribuiValorIdTelefoneParaExcluir(id: number): void {
    this.idTelefoneParaExcluir = id;
    console.log(this.idTelefoneParaExcluir);
  }

  public excluirTelefone(event: any): void {

    // console.log(event.excluir);

    if(event.excluir == 'sim') {

     /* this.usuario.userTelefones.forEach((tel, index) => {
        if(tel.id == this.idTelefoneParaExcluir) {
          this.usuario.userTelefones.splice(index, 1);
        }
      });*/

     this.usuarioService.excluirTelefone(this.idTelefoneParaExcluir).subscribe(response => {

        // Excluir a linha da tabela de telefones
        this.usuario.userTelefones.forEach((tel, index) => {
          if(tel.id == this.idTelefoneParaExcluir) {
            this.usuario.userTelefones.splice(index, 1);
          }
        });

        console.log("Telefone excluído com sucesso!");
      },
      erro => { 
        console.log('Erro ao excluir telefone: ' + erro); 
      });
    }
  }

  private novo(): void {
    this.usuario = new Usuario();
  }
}
