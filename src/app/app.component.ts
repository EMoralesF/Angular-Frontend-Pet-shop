import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rutas=[
    {
      name:'Examen',
      path:'examen'
    },
    {
      name:'Inicio',
      path:'inicio'
    },
    {
      name:'Registrate',
      path:'registrate'
    }
  ]
  title = 'proyecto1';
}
