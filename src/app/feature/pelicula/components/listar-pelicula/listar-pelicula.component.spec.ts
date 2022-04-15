import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarPeliculaComponent } from './listar-pelicula.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PeliculaService } from '../../shared/service/pelicula.service';
import { Pelicula } from '../../shared/model/pelicula';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarPeliculaComponent', () => {
  let component: ListarPeliculaComponent;
  let fixture: ComponentFixture<ListarPeliculaComponent>;
  let peliculaService: PeliculaService;
  const listaPeliculas: Pelicula[] = [new Pelicula(1, 'Pelicula 1', 'DVD'), new Pelicula(1, 'Pelicula 2', 'DVD')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPeliculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PeliculaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeliculaComponent);
    component = fixture.componentInstance;
    peliculaService = TestBed.inject(PeliculaService);
    spyOn(peliculaService, 'consultar').and.returnValue(
      of(listaPeliculas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(2).toBe(component.liPeliculas.length);
});

});
