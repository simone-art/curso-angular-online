import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string;
  @Output() clicado = new EventEmitter();

  
  imageURL = 'https://bloguinhodanana.files.wordpress.com/2011/01/filhotes-gato.jpg?w=584';

  constructor() { }

  ngOnInit(): void {
  }

  clicou($event){
    console.log("Está funcionando!", $event);
  }

  onClickBotaoEmissor($event){
    console.log("Devo emitir informaçoes para o componente pai", $event);
    this.clicado.emit($event);
  }

}
