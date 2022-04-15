import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkCliente = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkPelicula = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkAlquiler = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));


    async clickBotonClientes() {
        await this.linkCliente.click();
    }

    async clickBotonPeliculas() {
        await this.linkPelicula.click();
    }

    async clickBotonAlquileres() {
        await this.linkAlquiler.click();
    }

}
