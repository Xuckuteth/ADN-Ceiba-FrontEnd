import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { ListarPeliculaComponent } from './components/listar-pelicula/listar-pelicula.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
  {
    path: '',
    component: PeliculaComponent,
    children: [
      {
        path: 'crear',
        component: CrearPeliculaComponent
      },
      {
        path: 'listar',
        component: ListarPeliculaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
