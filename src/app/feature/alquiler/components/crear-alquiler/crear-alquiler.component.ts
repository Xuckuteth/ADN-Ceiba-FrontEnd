import { Component, OnInit } from '@angular/core';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/feature/cliente/shared/service/cliente.service';
import { PeliculaService } from 'src/app/feature/pelicula/shared/service/pelicula.service';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';


@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {
  alquilerForm: FormGroup;
  public respuesta = null;
  liClientes: Cliente[];
  liPeliculas: Pelicula[];


  constructor(protected alquilerServices: AlquilerService,
              protected clienteService: ClienteService,
              protected peliculaService: PeliculaService) { }



  ngOnInit() {
    this.consultarData();
    this.construirFormularioAlquiler();
  }

  crear() {
    this.alquilerServices.guardar(this.alquilerForm.value).subscribe((
      res) => {( 
        this.respuesta = res);
    });
}

  private consultarData() {
    this.clienteService.consultar().subscribe((res) => {
      this.liClientes = res;
    });
    this.peliculaService.consultar().subscribe((res) => {
      this.liPeliculas = res;
    });
  }


  private construirFormularioAlquiler() {
    this.alquilerForm = new FormGroup({
      cliente: new FormControl('', [Validators.required]),
      pelicula: new FormControl('', [Validators.required])
    });
  }



}
