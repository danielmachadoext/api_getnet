// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('buscarTodosUsuarios', () => {
    cy.request({
            
        url: `https://reqres.in/api/users?page=2`,
        method: 'GET',
        failOnStatusCode: false

    })
    .then((response) => {
        return response
    })
})

Cypress.Commands.add('buscarUsuarioEspecifico', (id) => {
    cy.request({
            
        url: `https://reqres.in/api/users/${id}`,
        method: 'GET',
        failOnStatusCode: false

    })
    .then((response) => {
        return response
    })
})
