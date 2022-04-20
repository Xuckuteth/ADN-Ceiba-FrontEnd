import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../shared/service/pelicula.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  public respuesta = null;
  constructor(protected peliculaServices: PeliculaService) { }

  ngOnInit() {
    this.construirFormularioPelicula();
  }

  crear() {
    this.peliculaServices.guardar(this.peliculaForm.value).subscribe((
      res) => {
        this.respuesta = res;
    });
}

  private construirFormularioPelicula() {
    this.peliculaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      formato: new FormControl('', [Validators.required])
    });
  }

}
