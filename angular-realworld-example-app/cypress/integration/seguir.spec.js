describe('Seguir', () => {
    it('Seguir Usuário', () => {
        const usuario = 'usuario'+(new Date()).getTime();
        const senha = 'senha'+(new Date()).getTime();
        cy.visit('/register', { timeout: 10000 })
        cy.get('[formcontrolname=username]').type(usuario)
        cy.get('[formcontrolname=email]').type(usuario+'@email.com')
        cy.get('[formcontrolname=password]').type(senha)
        cy.get('.btn').click()
        cy.wait(10000)
        cy.visit('/profile/testecypress')
        cy.contains('Folow').click()
    })
})