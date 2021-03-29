import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import SearchPage from '../../pages/searchPage';
const searchPage = new SearchPage();

Given('I am at Kayak page', () => {
    searchPage.navigate();
});

When('I search a trip from {string} to {string}', async (origin, destination) => {
    searchPage.selectOriginDestination(origin, destination)
});

When('I select the date range for a trip {string}, {string}', async (departDate, returnDate) => {
    searchPage.addDate(departDate, returnDate);
});

When('I choose the number of travelers 2 adults and 1 child', async () => {
    searchPage.addNumberTravelers();
});

Then('I should see {string} displayed as the page title', async (pageTitle) => {
    searchPage.getPageTitle().should('eq', pageTitle)
});

When('I Update the date range for a trip {string}, {string}', async (departDate, returnDate) => {
    searchPage.updateDate(departDate, returnDate);
});

Then('I select the lowest price', async () => {
    searchPage.selectLowerPrice();
});

Then('I should see the {string} login error message', async (message) => {
    searchPage.getAlertMessage().should('contain.text', message)
});
