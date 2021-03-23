import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas=[
    {
      name:'Jape',
      path:'jaspi'
    },
    {
      name:'Inicio',
      path:'inicio'
    },
    {
      name:'Registrate',
      path:'registrate'
    },
    {
      name:'Perros',
      path:'animales/perros'
    },
    {
      name:'Gatos',
      path:'animales/gatos'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
