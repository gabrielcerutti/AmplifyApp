/// <reference types="cypress" />
describe('process environment variables', () => {
    it('has variable my-var from cypress.json', () => {
      expect(Cypress.env('my-var')).to.equal('development')
    })
  
  })