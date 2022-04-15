import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';

describe('workspace-project Cliente', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cliente: ClientePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cliente = new ClientePage();
    });

    it('Deberia crear cliente', () => {
        const NOMBRE_CLIENTE = 'Prueba';

        page.navigateTo();
        navBar.clickBotonClientes();
        cliente.clickBotonCrearClientes();
        cliente.ingresarNombre(NOMBRE_CLIENTE);
        cliente.clickBotonGuardarCliente();

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
        page.navigateTo();
        navBar.clickBotonClientes();
        cliente.clickBotonListarClientes();

        expect(6).toBe(cliente.contarClientes());
    });

    it('Deberia borrar cliente', () => {



        page.navigateTo();
        navBar.clickBotonClientes();
        cliente.clickBotonListarClientes();
        cliente.clickBotonBorrarCliente();

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar clientes', () => {
        page.navigateTo();
        navBar.clickBotonClientes();
        cliente.clickBotonListarClientes();

        expect(5).toBe(cliente.contarClientes());
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
