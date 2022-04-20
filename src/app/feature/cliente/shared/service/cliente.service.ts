import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Cliente } from '../model/cliente';


@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}


  public consultar() {
    return this.http.doGet<Cliente[]>('/AlquilerPeliculas/clientes');
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, boolean>(`/AlquilerPeliculas/clientes`, cliente);
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`/AlquilerPeliculas/clientes/${cliente.id}`,
                                                 this.http.optsName('eliminar clientes'));
  }
}
