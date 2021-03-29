/**
 * Created by stuart1 on 05/11/2019.
 */
export default class BasePage {

    baseUrl       = "https://www.kayak.com.co/";
    cookieMessage = "#ccc-close";

    navigate() {
        cy
            .visit(this.baseUrl)
    }

    getPageTitle() {
        debugger
        return cy.title()
    }

}
