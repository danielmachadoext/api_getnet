///<reference types="cypress"/>

const payload_body = require('../fixtures/payload_create.json')

//

describe('Create user API', () => {

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

  //cenarios de teste
  it('Criar usuário', () => {

      cy.request({

        url:'http://reqres.in/api/users',
        method: 'POST',
        body: payload_body,
        headers: {
          Authorization: `Bearer ${token}`
       },
        failOnStatusCode: false
      
      })
        .then((response)=> {
          expect(response.status).equal(200)
          //expect(response.body.name).equal(payload_body.name)
          //expect(response.body.job).not.empty
          
       
        })

  })

})