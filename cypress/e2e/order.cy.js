import homePage from "../support/pages/HomePage"
import loginPage from "../support/pages/LoginPage"
import user from "../fixtures/user.json"
import accountPage from "../support/pages/AccountPage"
import nameOfProduct from "../fixtures/nameOfProduct.json"
import selectedProductPage from "../support/pages/SelectedProductPage"



describe('successful ordering on home page', () => {
    it('Login as a user and make successful order', () => {

        homePage.visit()
        homePage.getHeaderAccountButton().click();
        loginPage.fillLoginFields(user);
        loginPage.getSubmitLoginButton().click();

        cy.log('Verify first name displayed on account page...');
        accountPage.getFirstNameText().should('contain', user.firstName);

        cy.log('Select product and Verify selected product');
        homePage.visit();
        homePage.chooseProductByTitle(nameOfProduct);
        selectedProductPage.getChosenProductTitle().should('contain', nameOfProduct.nameOfProduct);

        cy.log('Order selected product');
        selectedProductPage.getCartButton().click();
        selectedProductPage.getCheckoutButton2().click();
        selectedProductPage.getConfirmOrederButton().click();
        selectedProductPage.getSuccessfulOrderText().should('contain', ' Your Order Has Been Processed!')


     })

    })