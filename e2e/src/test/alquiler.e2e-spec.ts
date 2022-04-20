import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { AlquilerPage } from '../page/alquiler/alquiler.po';

describe('workspace-project Alquiler', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let alquiler: AlquilerPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        alquiler = new AlquilerPage();
    });

    it('Deberia crear alquiler', () => {
        const NOMBRE_CLIENTE = 'Camila';
        const NOMBRE_PELICULA = 'Matrix';

        page.navigateTo();
        navBar.clickBotonAlquileres();
        alquiler.clickBotonCrearAlquileres();
        alquiler.ingresarCliente(NOMBRE_CLIENTE);
        alquiler.ingresarPelicula(NOMBRE_PELICULA);
        alquiler.clickBotonGuardarAlquiler();

        // Adicionamos las validaciones despues de la creación

        page.navigateTo();
        navBar.clickBotonAlquileres();
        alquiler.clickBotonListarAlquileres();

        expect(6).toBe(alquiler.contarAlquileres());
    });

    it('Deberia pagar alquiler', () => {
        page.navigateTo();
        navBar.clickBotonAlquileres();
        alquiler.clickBotonListarAlquileres();
        alquiler.clickBotonPagarAlquiler();

        // Adicionamos las validaciones despues de la creación
        page.navigateTo();
        navBar.clickBotonAlquileres();
        alquiler.clickBotonListarAlquileres();

        expect(5).toBe(alquiler.contarAlquileres());
    });

    it('Deberia listar alquileres', () => {
        page.navigateTo();
        navBar.clickBotonAlquileres();
        alquiler.clickBotonListarAlquileres();

        expect(5).toBe(alquiler.contarAlquileres());
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
