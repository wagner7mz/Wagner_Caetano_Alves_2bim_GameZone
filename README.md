 GameZone

Projeto desenvolvido para a disciplina de Desenvolvimento Web I (DW1).


O GameZone é uma aplicação web desenvolvida utilizando a arquitetura Cliente/Servidor. O sistema permite consultar categorias de jogos e jogos cadastrados em um banco de dados PostgreSQL através de uma API desenvolvida em Node.js.


- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- PostgreSQL

Estrutura do Projeto
```
DW1_GameZone
│
├── client
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



Crie um banco chamado:

```
gamezone
```

Depois execute o arquivo:

```
servidor/sql/banco.sql
```



Abra o terminal na pasta servidor:

```
npm install
```



```
node server.js
```

Abra o arquivo `index.html` utilizando o Live Server.



GET /categorias

GET /jogos

GET /jogosCategoria/:id



Wagner caetano Alves