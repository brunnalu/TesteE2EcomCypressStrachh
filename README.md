# Testes de Ponta a Ponta com Cypress

Projeto de exemplo para demonstrar testes de ponta a ponta (e2e) escritos com [Cypress](https://cypress.io) em execução no GitHub Actions.

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) 
- [Node.js](https://nodejs.org/en/) 
- npm 
**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar).

## Configurando as variáveis de ambiente

Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json` e defina os valores apropriados para todas as variáveis.

**Observação:** O arquivo `cypress.env.json` não é rastreado pelo Git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar testes nos modos interativo e headless, tanto em janelas de visualização de desktop quanto de tablet.

### Modo Headless

Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless usando uma janela de visualização de desktop.

Execute `npm run test:tablet` para executar os testes apropriados no modo headless usando uma viewport de tablet.

### Modo interativo

Execute `npm run cy:open` para abrir o __Cypress App__ e executar os testes no modo interativo usando uma viewport de desktop.

Execute `npm run cy:open:tablet` para abrir o __Cypress App__ e executar os testes no modo interativo usando uma viewport de tablet.

___

Criado com ❤️ por [Brunna ](www.linkedin.com/in/brunna-luiza).
