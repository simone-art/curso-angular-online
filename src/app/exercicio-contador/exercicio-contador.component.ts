import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent implements OnInit {

  valor = 0;

  incrementar(){
    this.valor = this.valor + 1;
  }

  decrementar(){
    this.valor = this.valor - 1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
