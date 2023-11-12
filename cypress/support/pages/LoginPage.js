import BasePage from "./BasePage";

class LoginPage extends BasePage {

    constructor(){
        super();
        this.elements.registrationAccountButton = '#accountFrm button';
        this.elements.loginNameField = '#loginFrm_loginname';
        this.elements.passwordField = '#loginFrm_password';
        this.elements.loginButton = '[title="Login"]';
    }

    getRegistrationAccountButton(){
        return cy.get(this.elements.registrationAccountButton)
    }

    getLoginNameField(){
        return cy.get(this.elements.loginNameField)
    }

    getPasswordField(){
        return cy.get(this.elements.passwordField)
    }

    getSubmitLoginButton(){
        return cy.get(this.elements.loginButton)
    }

    fillLoginFields(user){
        cy.log('Fill in authorization fields...');
        
        this.getLoginNameField().type(user.loginName);
        this.getPasswordField().type(user.password);



    }
}

export default new LoginPage();