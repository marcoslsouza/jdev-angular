import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  public op: string = 'salvar';

  constructor(private routeActive: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id != null) {
      console.log('Valor sendo editado: ' + id);
      this.op = 'editar';
    } else {
      
    }
  }

}
