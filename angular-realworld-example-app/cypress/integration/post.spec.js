describe('Post', () => {

    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress')
    })

    it('Novo', () => {
        const tit = 'Cypress E2E'
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type(tit)
        cy.get('[formcontrolname=description]').type('Ponta a Ponta')
        cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
        cy.contains('Publish Article').click()
        cy.get('h1').contains(tit)
    })

    it('Editar', () => {
        cy.contains('testecypress').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[formcontrolname=body]').clear()
        cy.get('[formcontrolname=body]').type('Economia')
        cy.contains('Publish Article').click()
        cy.contains('Economia')
    })

})