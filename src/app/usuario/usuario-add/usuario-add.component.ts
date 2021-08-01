import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios/usuario';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  public usuario = new Usuario();

  public op: string = 'salvar';

  constructor(private routeActive: ActivatedRoute, private router: Router, 
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
    let id: number = Number(this.routeActive.snapshot.paramMap.get('id'));

    if(id != 0) {
      console.log('Valor sendo editado: ' + id);
      this.op = 'editar';
      this.usuarioService.getUsuarioPorId(id).subscribe(response => {
        console.log(response);
        this.usuario = response;
      },
      erro => { console.log('Erro ao recuperar usuario: ' + erro); }
      );
    } else {

    }
  }

  public salvarUsuario(): void {
    console.log(this.usuario);
  }
}
