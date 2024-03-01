beforeEach(()=>{
    cy.visit("https://example.cypress.io")
    cy.fixture("example.json").as('validationValues')
})

it('find the children items', ()=> {
    cy.log(this.validationValues)
})