import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AlquilerService } from '../../shared/service/alquiler.service';
import { Alquiler } from '../../shared/model/alquiler';

@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html',
  styleUrls: ['./listar-alquiler.component.css']
})
export class ListarAlquilerComponent implements OnInit {
  public listaAlquileres: Observable<Alquiler[]>;

  public liAlquileres: Alquiler[] = [];

  constructor(protected alquilerService: AlquilerService) { }

  ngOnInit() {
   this.consultarAlquileres();
  }


  consultarAlquileres() {
    this.alquilerService.consultar().subscribe((res) => {
      this.liAlquileres = res;
    });
  }

  eliminarAlquiler(alquiler: Alquiler) {
    this.alquilerService.eliminar(alquiler).subscribe(() => {
    });
    window.location.href = window.location.href;
  }
}
