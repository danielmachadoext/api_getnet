/// <reference types="cypress"/>

describe("Get user API", () =>{

    //cenarios de teste
    it("Buscar todos os usuarios", () => {
        
        cy.buscarTodosUsuarios()
        .then((response) => {
            expect(response.status).equal(200)
            /*response.body.forEach(element => {
                expect(element.id).not.empty
            })*/
        })

    })

    it("Buscar usuário especifico", () => {
        
        const id = '2'
        
        cy.buscarUsuarioEspecifico(id)
        .then((response) => {
            expect(response.status).equal(200)
           // expect(response.body.id).not.empty 
            //expect(response.body.id).equal(id)
           //expect(response.body.first_name).equal("Janet")
                        
            })
        })


        it("Buscar usuario inexistente", () => {
        
            const id = 123
            
           cy.buscarUsuarioEspecifico(id)
    
            .then((response) => {
                expect(response.status).equal(404)
                //expect (response.body.error).equal(`Object with id=${id} was not found.`)
                
                })
            })





})