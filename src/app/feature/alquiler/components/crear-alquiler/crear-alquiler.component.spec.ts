import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearAlquilerComponent } from './crear-alquiler.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';
import { PeliculaService } from 'src/app/feature/pelicula/shared/service/pelicula.service';
import { ClienteService } from 'src/app/feature/cliente/shared/service/cliente.service';

describe('CrearAlquilerComponent', () => {
  let component: CrearAlquilerComponent;
  let fixture: ComponentFixture<CrearAlquilerComponent>;
  let alquilerService: AlquilerService;


  const cliente: Cliente = new Cliente(1, 'Cliente 1', 'Estandar');
  const pelicula: Pelicula = new Pelicula(1, 'Pelicula 1', 'DVD');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAlquilerComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [AlquilerService, HttpService, ClienteService, PeliculaService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    spyOn(alquilerService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('Registrando alquiler', () => {
    expect(component.alquilerForm.valid).toBeFalsy();
    component.alquilerForm.controls.cliente.setValue(cliente);
    component.alquilerForm.controls.pelicula.setValue(pelicula);
    expect(component.alquilerForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expec
  });
});
