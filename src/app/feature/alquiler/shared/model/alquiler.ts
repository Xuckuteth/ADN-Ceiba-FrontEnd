import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';

export class Alquiler {
    id: number;
    cliente: Cliente;
    pelicula: Pelicula;
    fechaAlquiler: Date;
    fechaDevolucion: Date;
    valor: string;

    constructor(cliente: Cliente, pelicula: Pelicula) {
        this.cliente = cliente;
        this.pelicula = pelicula;
    }
}
