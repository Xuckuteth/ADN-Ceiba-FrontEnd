export class Pelicula {
    id: number;
    nombre: string;
    formato: string;
    constructor(id: number, nombre: string, formato: string) {
        this.id = id;
        this.nombre = nombre;
        this.formato = formato;
    }
}
