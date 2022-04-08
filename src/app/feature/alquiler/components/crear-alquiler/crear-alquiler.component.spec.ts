import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearAlquilerComponent } from './crear-alquiler.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearAlquilerComponent', () => {
  let component: CrearAlquilerComponent;
  let fixture: ComponentFixture<CrearAlquilerComponent>;
  let alquilerService: AlquilerService;

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
      providers: [AlquilerService, HttpService],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.alquilerForm.valid).toBeFalsy();
  });

  it('Registrando alquiler', () => {
    expect(component.alquilerForm.valid).toBeFalsy();
    component.alquilerForm.controls.nombre.setValue('Estiven');
    expect(component.alquilerForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
