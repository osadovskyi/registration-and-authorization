import homePage from "../pages/HomePage";
import selectedProductPage from "../pages/SelectedProductPage";
import nameOfProduct from "../../fixtures/nameOfProduct.json"


export function searchProduct(products) {
    cy.get('[class="thumbnails grid row list-inline"]').find('[title="Acqua Di Gio Pour Homme"]').then(product => {
if(expect(product).to.have.attr('title').eq('Acqua Di Gio Pour Homme')){
    cy.wrap(product).click()
}else{
    cy.log('error')
    // cy.wrap(cy.get('.pagination li:nth-last-child(2)')).click()
   }
    })
    // // cy.get('.bgnone)').then((product) => {
    // if(){
    // selectedProductPage.getCartButton().click();
    // selectedProductPage.getCheckoutButton2().click();
    // selectedProductPage.getConfirmOrederButton().click();
    // cy.wrap(selectedProductPage.getSuccessfulOrderText().should('contain', ' Your Order Has Been Processed!'))
    //    }else{
    //     cy.get('.pagination li:nth-last-child(2)').click()
    //    }
       
    }


