import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Alquiler } from '../model/alquiler';


@Injectable()
export class AlquilerService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Alquiler[]>(`/AlquilerPeliculas/alquileres`, this.http.optsName('consultar alquileres'));
  }

  public guardar(alquiler: Alquiler) {
    return this.http.doPost<Alquiler, boolean>(`/AlquilerPeliculas/alquileres`, alquiler,
                                                this.http.optsName('crear/actualizar alquileres'));
  }

  public eliminar(alquiler: Alquiler) {
    return this.http.doDelete<boolean>(`/AlquilerPeliculas/alquileres/${alquiler.id}`,
                                                 this.http.optsName('eliminar alquileres'));
  }
}
