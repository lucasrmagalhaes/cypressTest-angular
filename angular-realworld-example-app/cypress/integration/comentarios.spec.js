describe('Comentarios', () => {
    it('Escrever', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('Global Feed').click()
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('Sensacional!')
        cy.get('.btn-primary').click()
        cy.contains('Sensacional!')
    })
})