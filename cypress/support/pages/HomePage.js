import BasePage from "./BasePage";

class HomePage extends BasePage{

    constructor() {
        super();
        this.elements.listOfProducts = '#special'

    }

    visit() {
        cy.log('Opening home page...');
        cy.visit('/');
    }
    getListOfproducts(){
        return cy.get(this.elements.listOfProducts);
    }

    chooseProductByTitle(nameOfProduct){
        this.getListOfproducts().find(`[title="${nameOfProduct.nameOfProduct}"]`).click();

        

    }


}
export default new HomePage();