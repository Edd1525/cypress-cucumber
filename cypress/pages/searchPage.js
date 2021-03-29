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
		closeMessage        = '.Button-No-Standard-Style.close.inside.darkIcon';
		startDate	          = '[id$="-dateRangeInput-display-start-inner"]';
	
    selectOriginDestination(origin, destination) {
        let field = cy.get(this.originField, {force: true}, { timeout: 10000 }).first().should('be.visible');
        field.click({force: true});
        field.type('{del},{del}');        
        field.type(origin, {force: true});

        field = cy.get(this.destinationField, {force: true}, { timeout: 10000 }).first();
        field.click({force: true});
        field.type(destination, {force: true})
        field.type('{downarrow},{enter}', {force: true});
    }

    addDate(departDate, returnDate) {
        let field = cy.get(this.departInput, {force: true} )
        field.click({force: true});
				this.choseDates(departDate, returnDate);
    }

		updateDate(departDate, returnDate) {
			let field = cy.get(this.startDate, {force: true} )
			field.click({force: true});
			this.choseDates(departDate, returnDate);
	}

	choseDates(departDate, returnDate) {
		let field = cy.get(`[aria-label="${departDate}"]`)
		field.click({force: true});

		field = cy.get(`[aria-label="${returnDate}"]`)
		field.click({force: true});
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
			let field = cy.get('spam').contains('Precio más bajo');
			field.click();
		}

    submit(buttonId) {
        const button = cy.get(buttonId).first();
        button.click();
				const closePopup = cy.get(this.closeMessage, { timeout: 20000 }).should('be.visible');;
				closePopup.click();
    }
			
    getAlertMessage() {
			return cy.get(this.alertMessage)
	}

}
