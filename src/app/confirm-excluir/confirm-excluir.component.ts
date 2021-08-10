import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-excluir',
  templateUrl: './confirm-excluir.component.html',
  styleUrls: ['./confirm-excluir.component.css']
})
export class ConfirmExcluirComponent implements OnInit {

  @Input('titulo') titulo: string = '';
  @Input('msg') msg: string = '';

  @Output() excluirSim = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public confirmExcluir(): void {
    this.excluirSim.emit({excluir: 'sim'});
  }
}
