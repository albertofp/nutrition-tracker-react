/// <reference types="cypress" />

describe('check navbar links', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:5173/nutrition-tracker-react/')
  })

  it('displays home page with navbar', () => {
    cy.contains('Nutrition Tracker')
    cy.contains('Home')
    cy.contains('About')
    cy.contains('Contact')
    cy.contains('Log in')
  })

  it('checks about', () => {
    cy.get('#about').click()
    cy.contains('App to track and display your daily calorie')
  })

  it('checks contact', () => {
    cy.get('#contact').click()
    cy.contains('Alberto F. Pluecker')
  })

  it('logs in', () => {
    cy.get('#login').click()
    cy.get("input[name='email']").type('s0gyqt+69zb0imfs92bw@sharklasers.com')
    cy.get("input[name='password").type('123123')
    cy.contains('Sign in').click()
    cy.contains('s0gyqt+69zb0imfs92bw@sharklasers.com')
  })
})

describe('Home functionality tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:5173/nutrition-tracker-react/')
    cy.get('#home').click()
  })

  it('home displays properly', () => {
    cy.contains('Daily Total')
    cy.contains('Search')
    cy.contains('Manual Input')
    cy.contains('Reset')
  })

  it('Searches item and does not find', () => {
    cy.contains('Search').click()
    cy.get('input').type('sdfogsidfbnsodjfb')
    cy.contains('Search Database').click()
    cy.contains('No results found')
  })

  /* it('Adds macros to Daily total', () => {
        cy.contains('Search').click()
        cy.contains('Show all').click()
        cy.contains('Add').click()
        cy.contains('Banana')
    }) */
})
