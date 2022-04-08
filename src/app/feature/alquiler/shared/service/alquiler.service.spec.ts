import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlquilerService } from './alquiler.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Alquiler } from '../model/alquiler';
import { HttpResponse } from '@angular/common/http';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';

describe('AlquilerService', () => {
  let httpMock: HttpTestingController;
  let service: AlquilerService;
  const apiEndpointAlquilerConsulta = `/AlquilerPeliculas/alquileres`;
  const apiEndpointAlquileres = `/AlquilerPeliculas/alquileres`;

  const cliente1: Cliente = new Cliente(1, "Cliente 1", "Estandar");
  const cliente2: Cliente = new Cliente(2, "Cliente 2", "Estandar");

  const pelicula1: Pelicula = new Pelicula(1, "Pelicula 1", "DVD");
  const pelicula2: Pelicula = new Pelicula(1, "Pelicula 1", "DVD");

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlquilerService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AlquilerService);
  });

  it('should be created', () => {
    const alquilerService: AlquilerService = TestBed.inject(AlquilerService);
    expect(alquilerService).toBeTruthy();
  });

  it('deberia listar alquileres', () => {
    const dummyAlquileres = [
      new Alquiler(cliente1, pelicula1), new Alquiler(cliente2, pelicula2)
    ];
    service.consultar().subscribe(alquiler => {
      expect(alquiler.length).toBe(2);
      expect(alquiler).toEqual(dummyAlquileres);
    });
    const req = httpMock.expectOne(apiEndpointAlquilerConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAlquileres);
  });

  it('deberia crear un alquiler', () => {
    const dummyAlquiler = new Alquiler(cliente1, pelicula1);
    service.guardar(dummyAlquiler).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointAlquileres);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un alquiler', () => {
    const dummyAlquiler = new Alquiler(cliente1, pelicula1);
    service.eliminar(dummyAlquiler).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointAlquileres}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
