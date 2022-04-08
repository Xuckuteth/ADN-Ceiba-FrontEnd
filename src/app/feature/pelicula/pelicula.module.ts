import { NgModule } from '@angular/core';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { ListarPeliculaComponent } from './components/listar-pelicula/listar-pelicula.component';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SharedModule } from '@shared/shared.module';
import { PeliculaService } from './shared/service/pelicula.service';



@NgModule({
  declarations: [
    CrearPeliculaComponent,
    ListarPeliculaComponent,
    PeliculaComponent
  ],
  imports: [
    PeliculaRoutingModule,
    SharedModule
  ],
  providers: [PeliculaService]
})
export class PeliculaModule { }
