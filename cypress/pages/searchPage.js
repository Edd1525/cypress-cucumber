import BasePage from './basePage.js'

export default class SearchPage extends BasePage {

    constructor() {
        super()
    }

    originField         = '[id*="origin-airport-display"]';
    destinationField    = '[name="destination"]';
    departInput         = '[id*="depart-input"]';
    adultsNumber        = '[id$="-travelersAboveForm-adults-label"]';
    addAdultBtn         = '[id$="-travelersAboveForm-adults"] button[title*="Más"]';
    addChildBtn         = '[id$="-travelersAboveForm-child"] button[title*="Más"]';
    submitButton        = '[title="Buscar vuelos"]';
    peopleDropDown      = '1 adulto';
    lowerTabPrice       = '[id$="-price_aTab"]';
    closeMessage        = '[id$=-dialog-close] > svg > use:last';
    startDate           = '[id$="-dateRangeInput-display-start-inner"]';

    selectOriginDestination(origin, destination) {
        let field = cy.get(this.originField, {force: true}, { timeout: 10000 }).first().should('be.visible');
        field.click({force: true});
        field.type('{del},{del}');
        field.type(origin, {force: true});

        field = cy.get(this.destinationField, {force: true}, { timeout: 10000 }).first();
        field.click({force: true});
        field.type(destination, {force: true})
        field.type('{enter}', {force: true});
    }

    addDate(departDate, returnDate) {
        let field = cy.get(this.departInput, {force: true} )
        field.click({force: true});
        this.choseDates(departDate, returnDate);
    }

    updateDate(departDate, returnDate) {
        let field = cy.get(this.startDate, {force: true} )
        field.click({force: true, multiple: true});
        cy.wait(5000);

        this.choseDates(departDate, returnDate);
    }

    choseDates(departDate, returnDate) {
        let field = cy.get(`[aria-label="${departDate}"]`)
        field.click({force: true});

        field = cy.get(`[aria-label="${returnDate}"]`)
        field.click({force: true});
        const button = cy.get(this.submitButton).first();
        button.click({force: true});
    }

    addNumberTravelers() {
        let field = cy.get('div').contains('1 adulto');
        field.click({force: true});

        field = cy.get(this.addAdultBtn)
        field.click({force: true});

        field = cy.get(this.addChildBtn)
        field.click({force: true});

        this.submit(this.submitButton)
    }

    selectLowerPrice() {
        let field = cy.get(this.lowerTabPrice);
        field.click({force: true});
    }

    submit(buttonId) {
        const button = cy.get(buttonId).first();
        button.click({force: true});

        cy.wait(2000); // anti pattern 
        // const closePopup = cy.get(this.closeMessage, { timeout: 20000 }).should('be.visible');
        // closePopup.click({force: true, multiple: true});
    }

    validateRedirect() {
      return cy.url().should('include', 'sort=price_a')
    }

    getMessage(message) {
      return cy.title().should('eq', message)
    }
}
