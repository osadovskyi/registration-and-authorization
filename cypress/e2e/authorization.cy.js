import user from "../fixtures/user.json"
import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";


describe('Succesfull authorization', () => {
    it('authorization', () => {
       homePage.visit();

       cy.log('Opening login page...');
       homePage.getHeaderAccountButton().click();

       loginPage.fillLoginFields(user);
       loginPage.getSubmitLoginButton().click();

       cy.log('Check the selected product...');
       accountPage.getFirstNameText().should('contain', user.firstName);
    })

})