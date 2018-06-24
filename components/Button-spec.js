/// <reference types="cypress" />
//@ts-check
describe('Button', () => {
  beforeEach(() => {
    cy.visit('/') // visit the page
    // and go to the components-button page
    // cannot use direct URL because this static SPA does
    // not have 404 page redirect back to index!
    cy.get('nav').contains('Components').click()
    cy.get('nav').contains('a', 'Button').click()
  })

  it('shows on the docz page', () => {
    cy.get('h2#basic-usage + button').should('be.visible').contains('Click me')
  })

  it('shows alert on click', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)

    cy.get('h2#with-onclick-handler + button')
    .click()
    .then(() => {
      expect(stub).to.have.been.calledOnce
    })
  })
})
