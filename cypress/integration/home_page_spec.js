describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/')
    cy.contains('Cristian').click()
    cy.contains('Nice Stems')
  })
})
