// import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PeliculaPage } from '../page/pelicula/pelicula.po';

describe('workspace-project Pelicula', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pelicula: PeliculaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pelicula = new PeliculaPage();
    });

    it('Deberia crear pelicula', () => {
        const NOMBRE_PELICULA = 'Prueba';
        const FORMATO_PELICULA = 'DVD';

        page.navigateTo();
        navBar.clickBotonPeliculas();
        pelicula.clickBotonCrearPelicula();
        pelicula.ingresarNombre(NOMBRE_PELICULA);
        pelicula.ingresarFormato(FORMATO_PELICULA);
        pelicula.clickBotonGuardarPelicula();

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);

        page.navigateTo();
        navBar.clickBotonPeliculas();
        pelicula.clickBotonListarPeliculas();

        expect(4).toBe(pelicula.contarPeliculas());
    });

    it('Deberia borrar pelicula', () => {
        page.navigateTo();
        navBar.clickBotonPeliculas();
        pelicula.clickBotonListarPeliculas();
        pelicula.clickBotonBorrarPelicula();

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar peliculas', () => {
        page.navigateTo();
        navBar.clickBotonPeliculas();
        pelicula.clickBotonListarPeliculas();

        expect(3).toBe(pelicula.contarPeliculas());
    });
});
