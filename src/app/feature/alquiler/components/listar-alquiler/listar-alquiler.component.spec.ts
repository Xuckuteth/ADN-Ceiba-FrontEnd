import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarAlquilerComponent } from './listar-alquiler.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { Alquiler } from '../../shared/model/alquiler';
import { HttpService } from 'src/app/core/services/http.service';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';

describe('ListarAlquilerComponent', () => {
  let component: ListarAlquilerComponent;
  let fixture: ComponentFixture<ListarAlquilerComponent>;
  let alquilerService: AlquilerService;

  const cliente1: Cliente = new Cliente(1, "Cliente 1", "Estandar");
  const cliente2: Cliente = new Cliente(2, "Cliente 2", "Estandar");

  const pelicula1: Pelicula = new Pelicula(1, "Pelicula 1", "DVD");
  const pelicula2: Pelicula = new Pelicula(1, "Pelicula 1", "DVD");

  const listaAlquileres: Alquiler[] = [new Alquiler(cliente1, pelicula1), new Alquiler(cliente2, pelicula2)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAlquilerComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [AlquilerService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    spyOn(alquilerService, 'consultar').and.returnValue(
      of(listaAlquileres)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaAlquileres.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});