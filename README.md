# GameZone

Projeto desenvolvido para a disciplina de Desenvolvimento Web I (DW1).

## Descrição

O GameZone é uma aplicação web desenvolvida utilizando a arquitetura Cliente/Servidor. O sistema permite consultar categorias de jogos e jogos cadastrados em um banco de dados PostgreSQL através de uma API desenvolvida em Node.js.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- PostgreSQL

## Estrutura do Projeto

```
DW1_GameZone
│
├── cliente
│   ├── imagens
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── servidor
│   ├── db.js
│   ├── package.json
│   ├── server.js
│   ├── .gitignore
│   └── sql
│       └── banco.sql
│
└── README.md
```

## Como executar

1. Crie um banco chamado `gamezone`.

2. Execute o arquivo:

```
sql/banco.sql
```

3. Na pasta `servidor`, execute:

```
npm install
```

4. Depois:

```
node server.js
```

5. Abra o `index.html` com o Live Server.

## Rotas

- GET /categorias
- GET /jogos
- GET /jogosCategoria/:id

## Autor

**Wagner Caetano Alves**