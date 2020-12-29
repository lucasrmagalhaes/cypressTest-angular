##### Por que não somente Testes Unitários?

<p align="justify">
O teste E2E simula a navegação pelo usuário, validando não só a interface frontend como integração com o backend.
<br>
Teste unitário valida a qualidade do Código. E2E valida a aplicação.
</p>

##### Cypress?

JavaScritpt: Baixa curva de aprendizado, custo com treinamento reduzido.
Performance: Paralelismo, Stress Test, Load Test.
Recorder: Cypress Recorder (Chrome), Katalon Recorder.
Produtividade: Auto-reload, Spies, Stubs e Mocks.
Licença: OpenSource (Mit)
End-to-end tests, Integration tests, Unit tests.

Diferente do Selenium ou Appium, que injetam comandos exernos, o Cypress roda no mesmo contexto JS do App, com acesso instantâneo a todas as interações e eventos.

- Trade-offs

Cypress não é uma ferramenta de automação geral.
Os comandos do Cypress sempre são executados dentro de um navegador.
Nunca haverá suporte para várias guias do navegador.
Você não pode usar o Cypress para controlar dois navegadores no mesmo teste.

###### Pré-Requisitos

Git
Node

###### O que vamos testar

Projeto para teste: Angular Real World Example App
