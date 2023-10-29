describe('registration and authorization', () => {
  it('registration', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
    cy.get('.btn.btn-orange.pull-right[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type('tester15'); 
    cy.get('#AccountFrm_lastname').type('tester15'); 
    cy.get('#AccountFrm_email').type('tester15@1secmail.com'); 
    cy.get('#AccountFrm_telephone').type('0123456789'); 
    cy.get('#AccountFrm_fax').type('9876543210'); 
    cy.get('#AccountFrm_company').type('Company');     
    cy.get('#AccountFrm_address_1').type('Address1');     
    cy.get('#AccountFrm_address_2').type('Address2');     
    cy.get('#AccountFrm_city').type('City');
    cy.get('[name="country_id"]').select('Ukraine').should('have.value', '220');
    cy.get('#AccountFrm_zone_id').select('Kyiv').should('have.value', '3490');     
    cy.get('#AccountFrm_postcode').type('12345');     
    cy.get('#AccountFrm_loginname').type('tester15');     
    cy.get('#AccountFrm_password').type('Password1!');
    cy.get('#AccountFrm_confirm').type('Password1!');
    cy.get('#AccountFrm_newsletter1').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.btn.btn-orange.pull-right').click();
    cy.get('.maintext').should('have.text', ' Your Account Has Been Created!')
  });

  it('authorization', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type('tester15');
    cy.get('#loginFrm_password').type('Password1!');
    cy.get('[title="Login"]').click();
    cy.get('.heading2').should('have.text', 'My Account');

  })
})