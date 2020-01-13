/// <reference types="Cypress" />

describe ('Initial test for landing page', () => {
    it ('Open landing page', () => {
      cy.visit ('/');
    });

    it ('find home button', () => {
        cy.get ('#home-id');
      });

    it ('find silicon black forest button', () => {
    cy.get ('#sbf-id');
    });

});

