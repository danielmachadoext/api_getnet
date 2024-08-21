/// <reference types="cypress"/>

const payload_body = require('../fixtures/payload_create.json')

describe("Deletar usuários", () =>{

    var token

  before('Login', ()=> {

    cy.request({

      url: 'http://reqres.in/api/login',
      method:'POST',
      BODY: {

        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      },
      failInStatusCode: false

    })
    .then((response) => {

      token = response.body.token
    })

      })


    it('Criar usuário', () => {

            cy.request({
            url: 'http://reqres.in/api/users',
            method: 'POST',
            body: payload_body,
            headers: {
                Authorization: `Bearer ${token}`
             },
            failOnStatusCode: false

        })
            .then((response_create) => {

                const id_cadastrado = response_create.body.id

                cy.request({
                   url: `https://reqres.in/api/users/${id_cadastrado}`,
                    method: 'DELETE',
                    failOnStatusCode: false
        
                }).then((response) => {
                    expect(response.status).equal(204)
                   // expect(response.body.message).equal(`Object with id = ${id_cadastrado} has been deleted.`)
                   


            })
    })
})

})