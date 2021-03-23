import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistrateComponent } from './pages/registrate/registrate.component';

const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'registrate',
    component: RegistrateComponent
  },
  {
    path:'jaspi',
    redirectTo: '/inicio'
  },
  { 
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path:'animales',
    loadChildren:()=>import('./animales/animales.module').then(m=>m.AnimalesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
