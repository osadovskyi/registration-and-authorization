import BasePage from "./BasePage";

class SelectedProductPage extends BasePage{

    constructor (){
        super();
        this.elements.chosenProductTitle = '.bgnone'
        this.elements.cartButton = '.productpagecart'
        this.elements.productQuantityField = '#cart_quantity80d8601ba52a1351d969c41c14fd8dd827'
        this.elements.checkoutButton2 = '#cart_checkout2'
        this.elements.confirmOrederButton = '#checkout_btn'
        this.elements.successfulOrderText = '.maintext'
    }

    getChosenProductTitle(){
        return cy.get(this.elements.chosenProductTitle)
    }

    getCartButton(){
        return cy.get(this.elements.cartButton)
    }

    getProductQuantityField(){
        return cy.get(this.elements.productQuantityField)
    }
    getCheckoutButton2(){
        return cy.get(this.elements.checkoutButton2)
    }
    getConfirmOrederButton(){
        return cy.get(this.elements.confirmOrederButton)
    }
    getSuccessfulOrderText(){
        return cy.get(this.elements.successfulOrderText)
    }

}
export default new SelectedProductPage