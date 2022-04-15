import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PeliculaService } from './pelicula.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Pelicula } from '../model/pelicula';
import { HttpResponse } from '@angular/common/http';

describe('PeliculaService', () => {
  let httpMock: HttpTestingController;
  let service: PeliculaService;
  const apiEndpointPeliculaConsulta = `/AlquilerPeliculas/peliculas`;
  const apiEndpointPeliculas = `/AlquilerPeliculas/peliculas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeliculaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PeliculaService);
  });

  it('should be created', () => {
    const productService: PeliculaService = TestBed.inject(PeliculaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar peliculas', () => {
    const dummyPelicula = [
      new Pelicula(1, 'Pelicula 1', 'DVD'), new Pelicula(2, 'Pelicula 2', 'DVD')
    ];
    service.consultar().subscribe(peliculas => {
      expect(peliculas.length).toBe(2);
      expect(peliculas).toEqual(dummyPelicula);
    });
    const req = httpMock.expectOne(apiEndpointPeliculaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPelicula);
  });

  it('deberia crear una pelicula', () => {
    const dummyPelicula = new Pelicula(1, 'Pelicula 1', 'DVD');
    service.guardar(dummyPelicula).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPeliculas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar una pelicula', () => {
    const dummyPelicula = new Pelicula(1, 'Pelicula 1', 'DVD');
    service.eliminar(dummyPelicula).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPeliculas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
