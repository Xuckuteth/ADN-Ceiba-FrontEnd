import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(protected clienteServices: ClienteService) { }

  ngOnInit() {
    this.construirFormularioCliente();
  }

  crear() {
    this.clienteServices.guardar(this.clienteForm.value).subscribe((
      res) => {
        console.log(res);
        
    })
}

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
  }

}
