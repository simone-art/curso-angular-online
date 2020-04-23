import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seja Bem-Vindo';
  palavra = 'Carro';

  constructor(){
    
  }

  eventoRecebido($event){
    console.log("App Component: EVENTO RECEBIDO", $event);
  }
}
