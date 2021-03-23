import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';

import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { DatosMascotasService } from './datos-mascotas.service';

@NgModule({
  declarations: [PerrosComponent, GatosComponent],
  imports: [
    CommonModule, AnimalesRoutingModule
  ],
  providers: [DatosMascotasService]
})
export class AnimalesModule {}