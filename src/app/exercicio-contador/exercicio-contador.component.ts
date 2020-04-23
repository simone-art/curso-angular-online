import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent implements OnInit {

  @Input() valor = 0;
  @Output() valorMudou = new EventEmitter();

  incrementar(){
    this.valor = this.valor + 1;
    this.valorMudou.emit(this.valor);
  }

  decrementar(){
    this.valor = this.valor - 1;
    this.valorMudou.emit(this.valor)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
