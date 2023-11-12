import homePage from "../support/pages/HomePage"
import loginPage from "../support/pages/LoginPage"
import user from "../fixtures/user.json"
import accountPage from "../support/pages/AccountPage"
import nameOfProduct from "../fixtures/nameOfProduct.json"
import selectedProductPage from "../support/pages/SelectedProductPage"
import { searchProduct } from "../support/helpers/helper"




describe('successful ordering on home page', () => {
    it('Login as a user and make successful order', () => {

        homePage.visit()
        homePage.getHeaderAccountButton().click();
        loginPage.fillLoginFields(user);
        loginPage.getSubmitLoginButton().click();

        cy.log('Verify first name displayed on account page...');
        accountPage.getFirstNameText().should('contain', user.firstName);

        cy.log('Select product and Verify selected product');
        let products = [nameOfProduct.nameOfProduct]
        homePage.visit();
        cy.get('#filter_keyword[type="text"]').click().type('e');
        cy.get('.button-in-search').click();
        searchProduct(products);


        // function searchProduct(product) {
        //     // cy.get('.bgnone)').then((product) => {
        //        if(cy.get('.bgnone').find(`[title="${nameOfProduct.nameOfProduct}"]`)){
        //         cy.get(`[title="${nameOfProduct.nameOfProduct}"]`).click
        //        }else{
        //         cy.get('.pagination li:nth-last-child(2)').click()
        //        }
               
        //     }
        // })

    })
    })
   
    

//                if(homePage.chooseProductByTitle(nameOfProduct.nameOfProduct){
//                 selectedProductPage.getChosenProductTitle();
//                 wrap(selectedProductPage.getChosenProductTitle().click())
//                 selectedProductPage.getCartButton().click();
//                 selectedProductPage.getCheckoutButton2().click();
//                 selectedProductPage.getConfirmOrederButton().click();
//                 selectedProductPage.getSuccessfulOrderText().should('equal', ' Your Order Has Been Processed!')
//             }) else {
//                 cy.get('.pagination li:nth-last-child(2)').click()
//             } 
//             })
//             if(homePage.chooseProductByTitle(nameOfProduct.nameOfProduct){
//                 selectedProductPage.getChosenProductTitle();
//                 wrap(selectedProductPage.getChosenProductTitle().click())
//                 selectedProductPage.getCartButton().click();
//                 selectedProductPage.getCheckoutButton2().click();
//                 selectedProductPage.getConfirmOrederButton().click();
//                 selectedProductPage.getSuccessfulOrderText().should('equal', ' Your Order Has Been Processed!')
//             })else{
//             cy.get('.pagination li:nth-last-child(2)')
//             }

//             export function searchProduct(title) { 
//     cy.get('.bgnone)'.then((product) => {            
//         wrap(if (product.find(title).length > 0) { 
//             cy.get(title).click(); 
//         } else { 
//             cy.get(next).click(); 
//         }) 
//     }) 
//     cy.wrap(searchProduct(product)) 
// }

//         // homePage.chooseProductByTitle(nameOfProduct);
//         // selectedProductPage.getChosenProductTitle().should('contain', nameOfProduct.nameOfProduct);

//         // cy.log('Order selected product');
//         // selectedProductPage.getCartButton().click();
//         // selectedProductPage.getCheckoutButton2().click();
//         // selectedProductPage.getConfirmOrederButton().click();
//         // selectedProductPage.getSuccessfulOrderText().should('equal', ' Your Order Has Been Processed!')

        
//         // const product = nameOfProduct.nameOfProduct
//         // function searchProduct(product) {
//         //     if(homePage.chooseProductByTitle(nameOfProduct.nameOfProduct){
//         //         selectedProductPage.getChosenProductTitle();
//         //         wrap(selectedProductPage.getChosenProductTitle().click())
//         //         selectedProductPage.getCartButton().click();
//         //         selectedProductPage.getCheckoutButton2().click();
//         //         selectedProductPage.getConfirmOrederButton().click();
//         //         selectedProductPage.getSuccessfulOrderText().should('equal', ' Your Order Has Been Processed!')
//         //     })else{
//         //     cy.get()
//         //     }
            
            
//         // }


        


    //  })

    