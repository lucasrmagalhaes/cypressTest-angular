<h1 align="left">
  Testes E2E com Cypress
</h1>

<h3 align="center"> 
  Por que não somente Testes Unitários?
</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O teste E2E simula a navegação pelo usuário, validando não só a interface frontend como integração com o backend.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teste unitário valida a qualidade do Código. E2E valida a aplicação.
</p>

<hr>

<h3 align="center"> 
  Cypress?
</h3>

<p align="justify">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScritpt: Baixa curva de aprendizado, custo com treinamento reduzido.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance: Paralelismo, Stress Test, Load Test.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recorder: Cypress Recorder (Chrome), Katalon Recorder.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produtividade: Auto-reload, Spies, Stubs e Mocks.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Licença: OpenSource (Mit).<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End-to-end tests, Integration tests, Unit tests.<br>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diferente do Selenium ou Appium, que injetam comandos exernos, o Cypress roda no mesmo contexto JS do App, com acesso instantâneo a todas as interações e eventos.
</p>

<h3 align="center"> 
  Trade-offs
</h3>

<p align="justify">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cypress não é uma ferramenta de automação geral.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Os comandos do Cypress sempre são executados dentro de um navegador.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nunca haverá suporte para várias guias do navegador.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Você não pode usar o Cypress para controlar dois navegadores no mesmo teste.
</p>

<hr>

<h3 align="center"> 
  Pré-Requisitos
</h3>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Git<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node
</p>

<hr>

<h3 align="center"> 
  O que vamos testar
</h3>

<p align="justify">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeto para teste: Angular Real World Example App
  <pre>git clone https://github.com/gothinkster/angular-realworld-example-app</pre>
  <pre>cd angular-realworld-example-app</pre>
  <pre>npm install</pre>
  <pre>npm run start
http://localhost:4200/</pre><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aqui temos um aplicativo Angular contendo exemplos "reais" (CRUD, autenticação, etc) de acordo com a especificação para exemplos RealWord.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vamos adicionar o Cypress!
</p>

<hr>

<h3 align="center"> 
  Instalação
</h3>

<p align="justify">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abra outro terminal. Na pasta/angular-realworld-example-app/ execute:
  <pre>npm install cypress --save-dev</pre>
  <pre>npx cypress -v</pre>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Caso tenha problemas com Proxy ou Firewall, baixe o <a href="https://download.cypress.io/desktop">binário</a> e configure a variável de ambiente antes de instalar:
  <br><br>
  <pre>set CYPRESS_INSTALL_BINARY=C:\cypress.zip</pre>
  <pre>npm install cypress --save-dev --verbose</pre>
</p>

<hr>

<h3 align="center"> 
  Removendo o Protactor
</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remova o pacote:
  <pre>npm uninstall protactor --save-dev</pre>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exclua a pasta /e2e/<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do package.json, remova a linha: "e2e": "ng e2e"
</p>

<hr>

<h3 align="center"> 
  Cypress Test Runner
</h3>

<p align="left">
    <pre>npx cypress open</pre>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O comando "cypress open", além de abrir o Cypress Test Runner, cria a pasta inicial /cypress/ e o arquivo de configuração /cypress.json<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E já vem com /examples/ dos principais comandos Cypress.
</p>

<hr>

<h3 align="center"> 
  Primeiro Teste
</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cypress/integrations/exemplo.spec.js
  <pre>describe('Primeiro Teste', () => {
  it('Exemplos Cypress', () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.equal(true)
  })
})</pre>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;describe and it come from Mocha<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expect comes from Chai
</p>

<hr>

<h3 align="center"> 
  Como Rodar
</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para executar todos os testes da pasta /cypress/integration/:
  <pre>npx cypress run</pre>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para executar somente um roteiro:
  <pre>npx cypress run --spec "cypress/integration/examples/example.spec.js"</pre>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para abrir a interface do Cypress Test Runner:
  <pre>npx cypress open</pre>
</p>

<hr>

<h3 align="center">Configuração</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cypress.json
<pre>
{
  "baseUrl": "http://localhost:4200",
  "pageLoadTimeout": 30000,
  "defaultCommandTimeOut": 30000,
  "viewportHeight": 800,
  "viewportWidth": 500,
  "retries": 3
}
</pre>  
</p>

<hr>

<h3 align="center">Roteiro de Testes</h3>

<ol>
  <li>Cadastro</li>
  <li>Login</li>
  <li>Perfil</li>
  <li>Feeds</li>
  <li>Paginação</li>
  <li>Post</li>
  <li>Tags</li>
  <li>Comentários</li>
  <li>Seguir</li>
  <li>Logout</li>
</ol>

<hr>

<h3 align="center">Cypress Recorder</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://chrome.google.com/webstore/detail/cypress-recorder/glcapdcacdfkokcmicllhcjigeodacab">Google Chrome - Cypress Recorder</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Extensão para o Chrome capaz de gravar um roteiro base.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recomendado para capturar os seletores no DOM.
  
  <pre>
describe('Conduit Cadastro', () => {
    const usuario = 'usuario' + (new Date()).getTime()
    const senha = 'senha' + (new Date()).getTime()

    it('Novo Usuário', () => {
        cy.visit('/register')
        cy.get('[formcontrolname=username]').type(usuario)
        cy.get('[formcontrolname=email]').type(usuario+'@email.com')
        cy.get('[formcontrolname=password]').type(senha)
        cy.get('.btn').click()
        cy.contains('.nav-item:nth-child(4) > .nav-link', usuario)
            .should('be.visible')
    })
})
</pre>
  
  <pre>npx cypress run --spec "cypress/integration/examples/register.spec.js"</pre>
</p>
