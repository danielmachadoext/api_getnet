/// <reference types="cypress"/>

const payload_body = require('../fixtures/payload_create.json')
const payload_update_body = require('../fixtures/payload_update.json')


describe("Update user API", () =>{

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

    it('Criar usuario', () => {

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

                //const id_criado = response_create.body.id

                cy.request({
                   //url: `http://reqres.in/api/users/${id_criado}`,
                    url: `http://reqres.in/api/users/2`,
                    method: 'PUT',
                    body: payload_update_body,
                    headers: {
                        Authorization: `Bearer ${token}`
                     },
                    failOnStatusCode: false
        
                }).then((response) => {
                    expect(response.status).equal(200)
                    //expect(response.body.id).not.empty
                    //expect(response.body.name).not.empty
                    

            })
    })
})

})