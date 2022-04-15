import { by, element } from 'protractor';

export class AlquilerPage {
    private linkCrearAlquiler = element(by.id('linkCrearAlquiler'));
    private linkListarAlquileres = element(by.id('linkListarAlquiler'));
    private inputClienteAlquiler = element(by.id('clienteAlquiler'));
    private inputPeliculaAlquiler = element(by.id('peliculaAlquiler'));
    private listaAlquileres = element.all(by.id('liAlquileres'));
    private pagarAlquiler = element.all(by.id('pagarAlquiler')).last();
    private guardarAlquiler = element(by.id('guardarAlquiler'));

    async clickBotonCrearAlquileres() {
        await this.linkCrearAlquiler.click();
    }

    async clickBotonListarAlquileres() {
        await this.linkListarAlquileres.click();
    }

    async ingresarCliente(clienteAlquiler) {
        await this.inputClienteAlquiler.sendKeys(clienteAlquiler);
    }

    async ingresarPelicula(peliculaAlquiler) {
        await this.inputPeliculaAlquiler.sendKeys(peliculaAlquiler);
    }

    async contarAlquileres() {
        return this.listaAlquileres.count();
    }

    async clickBotonPagarAlquiler() {
        await this.pagarAlquiler.click();
    }

    async clickBotonGuardarAlquiler() {
        await this.guardarAlquiler.click();
    }
}
