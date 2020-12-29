describe('Paginação', () => {
    it('Paginar', () => {
        cy.visit('/')
        cy.get('.page-item.active > a').contains('1')
        cy.get('.page-item:nth-child(2) > .page-link').click()
        cy.get('.page-item.active > a').contains('2')
        cy.get('.page-item:nth-child(3) > .page-link').click()
        cy.get('.page-item.active > a').contains('3')
    })
})