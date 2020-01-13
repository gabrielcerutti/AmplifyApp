/// <reference types="Cypress" />

describe ('Initial test for Haufe Assistenz Kongress', () => {
    it ('Open 2934', () => {
      cy.visit ('/');
    });

    it ('find link with given id', () => {
        cy.get ('#2934').click();

        cy.location('pathname', {timeout: 10000})
        .should('include', '/congress');      
     
      });

});

