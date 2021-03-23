import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrateComponent } from './registrate/registrate.component';


@NgModule({
  declarations: [InicioComponent, RegistrateComponent],
  imports: [
    CommonModule
  ],
  exports:[
    InicioComponent, RegistrateComponent
  ]
})
export class PagesModule { }
