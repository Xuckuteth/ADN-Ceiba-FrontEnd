import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Pelicula } from '../model/pelicula';


@Injectable()
export class PeliculaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pelicula[]>(`/AlquilerPeliculas/peliculas`, this.http.optsName('consultar peliculas'));
  }

  public guardar(pelicula: Pelicula) {
    return this.http.doPost<Pelicula, boolean>(`/AlquilerPeliculas/peliculas`, pelicula,
                                                this.http.optsName('crear/actualizar peliculas'));
  }

  public eliminar(pelicula: Pelicula) {
    return this.http.doDelete<boolean>(`/AlquilerPeliculas/peliculas/${pelicula.id}`,
                                                 this.http.optsName('eliminar peliculas'));
  }
}
