///<reference types="cypress"/>

const payload_body = require('../fixtures/payload_create.json')

//

describe('API validation', () => {


  //cenarios de teste
  it('criar dispositivo', () => {

      cy.request({

        url:'http://reqres.in',
        method: 'POST',
        body: payload_body,
        failOnStatusCode: false
      
      })
        .then((resultado)=> {
          expect(resultado.status).equal(200)
         // expect(resultado.body.name).equal("morpheus")
         // expect(resultado.body.name).equal("morpheus")
          //expect(resultado.body.job).equal(payload_body.job)
       //   expect(resultado.body.job).equal("leader")
         expect(resultado.body.id).not.empty
          //expect(resultado.body.createdAt).not.empty










        })


  })
})