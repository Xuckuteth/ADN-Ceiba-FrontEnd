import { NgModule } from '@angular/core';

import { AlquilerRoutingModule } from './alquiler-routing.module';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { SharedModule } from '@shared/shared.module';
import { AlquilerService } from './shared/service/alquiler.service';


@NgModule({
  declarations: [
    CrearAlquilerComponent,
    ListarAlquilerComponent,
    AlquilerComponent
  ],
  imports: [
    AlquilerRoutingModule,
    SharedModule
  ],
  providers: [AlquilerService]
})
export class AlquilerModule { }
