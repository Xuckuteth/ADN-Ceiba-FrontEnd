import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ClienteService } from '../../shared/service/cliente.service';
import { Cliente } from '../../shared/model/cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  public listaClientes: Observable<Cliente[]>;

  public liClientes: Cliente[] = [];

  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {
   this.ConsultarClientes();
   console.log(this.liClientes);

  }


  ConsultarClientes() {
    this.clienteService.consultar().subscribe((res) => {
      this.liClientes = res;
    });
  }

  EliminarCliente(cliente: Cliente) {
    this.clienteService.eliminar(cliente).subscribe(() => {
    });
  }
}
