/// <reference types="cypress" />
//@ts-check
describe('Button', () => {
  beforeEach(() => {
    cy.visit('/components-button')
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

  it('has menu bar', () => {
    cy.get('nav').should('be.visible')
      .contains('Components')
      .click()

    cy.get('nav').contains('a', 'Button').should('be.visible')
    cy.contains('h1', 'Button').should('be.visible')
    cy.url().should('contain', 'components-button')

    cy.get('nav').contains('a', 'Alert').should('be.visible').click()
    cy.contains('h1', 'Alert').should('be.visible')
    cy.url().should('contain', 'components-alert')
  })

  it('has menu bar (narrow screen)', () => {
    cy.viewport('iphone-6')

    // not the best looking page, but the content is (barely) visible
    cy.get('nav').should('be.visible')
      .contains('Components')
      .click()

    cy.get('nav').contains('a', 'Button').should('be.visible')
    cy.contains('h1', 'Button').should('be.visible')
    cy.url().should('contain', 'components-button')

    cy.get('nav').contains('a', 'Alert').should('be.visible').click()
    cy.contains('h1', 'Alert').should('be.visible')
    cy.url().should('contain', 'components-alert')
  })
})
