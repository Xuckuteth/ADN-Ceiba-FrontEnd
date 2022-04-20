import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PeliculaService } from '../../shared/service/pelicula.service';
import { Pelicula } from '../../shared/model/pelicula';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.css']
})
export class ListarPeliculaComponent implements OnInit {
  public listaPelicula: Observable<Pelicula[]>;

  public liPeliculas: Pelicula[] = [];

  constructor(protected peliculaService: PeliculaService) { }

  ngOnInit() {
   this.ConsultarPeliculas();
   console.log(this.liPeliculas);

  }


  ConsultarPeliculas() {
    this.peliculaService.consultar().subscribe((res) => {
      this.liPeliculas = res;
    });
  }

  EliminarPelicula(pelicula: Pelicula) {
    this.peliculaService.eliminar(pelicula).subscribe(() => {
    });
    window.location.href;
  }
}
