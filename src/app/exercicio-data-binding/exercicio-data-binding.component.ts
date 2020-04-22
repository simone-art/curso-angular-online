import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  imageURL = 'https://bloguinhodanana.files.wordpress.com/2011/01/filhotes-gato.jpg?w=584';

  constructor() { }

  ngOnInit(): void {
  }

}
