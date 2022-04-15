import { by, element } from 'protractor';

export class ClientePage {
    private linkCrearCliente = element(by.id('linkCrearCliente'));
    private linkListarClientes = element(by.id('linkListarCliente'));
    private inputNombreCliente = element(by.id('nombreCliente'));
    private listaClientes = element.all(by.id('liClientes'));
    private guardarCliente = element(by.id('guardarCliente'));
    private borrarCliente = element.all(by.id('borrarCliente')).last();

    async clickBotonCrearClientes() {
        await this.linkCrearCliente.click();
    }

    async clickBotonListarClientes() {
        await this.linkListarClientes.click();
    }

    async clickBotonGuardarCliente() {
        await this.guardarCliente.click();
    }

    async clickBotonBorrarCliente() {
        await this.borrarCliente.click();
    }

    async ingresarNombre(nombreCliente) {
        await this.inputNombreCliente.sendKeys(nombreCliente);
    }

    async contarClientes() {
        return this.listaClientes.count();
    }

}
