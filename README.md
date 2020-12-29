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
  <pre>npm run start</pre><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;http://localhost:4200/<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aqui temos um aplicativo Angular contendo exemplos "reais" (CRUD, autenticação, etc) de acordo com a especificação para exemplos RealWord.<br>
  Vamos adicionar o Cypress!
</p>

<h3 align="center"> 
  Instalação
</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abra outro terminal. Na pasta/angular-realworld-example-app/ execute:<br>
  <pre>npm install cypress --save-dev</pre><br>
  <pre>npx cypress -v</pre><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Caso tenha problemas com Proxy ou Firewall, baixe o binário em https://download.cypress.io/desktop e configure a variável de ambiente antes de instalar:<br>
  <pre>set CYPRESS_INSTALL_BINARY=C:\cypress.zip</pre><br>
  <pre>npm install cypress --save-dev --verbose</pre>
</p>

<h3 align="center"> 
  Removendo o Protactor
</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remova o pacote:<br>
  <pre>npm uninstall protactor --save-dev</pre><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exclua a pasta /e2e/<br>
  Do package.json, remova a linha: "e2e": "ng e2e"
</p>
