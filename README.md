# Teste Visando a criação de um API com Node e React.

## Requisitos

O teste consistem em criar um CRUD para cadastrar os produtos comprados no estoque de uma loja com as seguintes informações:

- nome do produto
- valor
- quantidade de vendas
- código
- descrição

Telas: 

- Lista de produtos cadastrados, com paginação. De preferência implementada, mas pode ser via componente pronto.

- Tela para cadastrar novo produto. Aqui deverá ser feito um tratamento para verificar se o produto informado já existe, e caso exista deverá ser atualizado somente a quantidade somando a quantidade já existente.

- Tela de atualização:
    - nome 
    - descrição 
    - código do produto.


Diferencial, mas não obrigatório:

- Tela exibindo uma tabela com os 3 produtos mais caros.

- Tela exibindo uma tabela com os 3 produtos com maior estoque.
---
<br/>

## Aplicação

Para facilitar a execução da aplicação foi utilizado o Docker, para executar a aplicação em uma máquina com o Docker instalado basta executar o comando na raiz do projeto:

```
$ docker-compose -up -d 
```
Por padrão o projeto pode ser acessado no lo http://localhost:3000

A primeira tela é a de produtos, nela será listado todos os produtos do banco de dados em uma tabela com 5 produtos por vez, para visualizar os demais produtos bata utilizar os botoes de paginação. E possível cadastrar um novo produto, verificar os três produtos mais caros ou os três produtos com maior estoque utilizando os botoes abaixo da tela que os produtos são listados.

Caso um produto com o mesmo código seja cadastrado apenas o seu valor no estoque será atualizado, para atualizar um produto cadastrado basta clicar no ícone "✏️" para ser redirecionar para a página de atualização.

Na página de cadastrado os seguintes campos são obrigatórios:
- nome do produto
- valor
- quantidade de vendas
- código
