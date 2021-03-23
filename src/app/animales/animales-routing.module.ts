import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  path: '', //Nunca poner aquí un nombre incluso si no tiene hijas
      children :[ //Rutas hijas
          { path: 'perros', component: PerrosComponent },
          { path: 'gatos', component: GatosComponent },
          //{ path:'**', component: PerrosComponent }
      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AnimalesRoutingModule { }
