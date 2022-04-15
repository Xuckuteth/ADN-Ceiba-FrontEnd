import { by, element } from 'protractor';

export class PeliculaPage {
    private linkCrearPelicula = element(by.id('linkCrearPelicula'));
    private linkListarPeliculas = element(by.id('linkListarPelicula'));
    private inputNombrePelicula = element(by.id('nombrePelicula'));
    private inputFormatoPelicula = element(by.id('formatoPelicula'));
    private listaPeliculas = element.all(by.id('liPeliculas'));
    private borrarPelicula = element.all(by.id('borrarPelicula')).last();
    private guardarPelicula = element(by.id('guardarPelicula'));

    async clickBotonCrearPelicula() {
        await this.linkCrearPelicula.click();
    }

    async clickBotonListarPeliculas() {
        await this.linkListarPeliculas.click();
    }

    async ingresarNombre(nombrePelicula) {
        await this.inputNombrePelicula.sendKeys(nombrePelicula);
    }

    async clickBotonBorrarPelicula() {
        await this.borrarPelicula.click();
    }

    async clickBotonGuardarPelicula() {
        await this.guardarPelicula.click();
    }

    async ingresarFormato(formatoPelicula) {
        await this.inputFormatoPelicula.sendKeys(formatoPelicula);
    }

    async contarPeliculas() {
        return this.listaPeliculas.count();
    }
}
