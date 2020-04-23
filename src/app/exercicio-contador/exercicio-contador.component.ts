import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent implements OnInit {

  @Input() valor = 0;

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
