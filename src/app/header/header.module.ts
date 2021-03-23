import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarratituloComponent } from './barratitulo/barratitulo.component';
import { BarralogoComponent } from './barralogo/barralogo.component';



@NgModule({
  declarations: [BarratituloComponent, BarralogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BarratituloComponent, BarralogoComponent
  ]
})
export class HeaderModule { }
