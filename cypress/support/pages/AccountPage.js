import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
        super();
        this.elements.firstNameTest = '.heading1';
    }
    getFirstNameText(){
        return cy.get(this.elements.firstNameTest, {timeout:2000})
    }
}
export default new AccountPage();