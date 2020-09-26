# CRUD COM SEQUELIZE E MYSQL

projeto desenvolvido por mim durante os estudos da formação NodeJs do Guia do Programador - Victor Lima

### Installation

Requer o [Node.js](https://nodejs.org/) v12.13.0+ para executar.


Instale as dependências e devDependencies e inicie o servidor com ```sh
npm start
```

```sh
$ npm install --save express
$ npm install --save sequelize
$ npm install --save mysql2
$ npm install --save ejs
$ npm install --save nodemon -D
```

### Desenvolvimento

Um dos grandes desafios foi utilizar a arquitetura MVC, com o model e o controller, para separar os arquivos e deixar o código um pouco mais organizados, outra coisa que achei realmente incrível é o sequelize, é um ORM simples e de linguagem e documentação simples. Para realizar o operação de criar um item no banco dedos, importei o model e apliquei o método CREATE como parâmetro, passei o dado name que vem do input do meu html, e para realizar a operação de DELETE e UPDATE, usa-se como parâmetro o id, que está em um campo oculto da pagina. na listagem dos itens a método usado foi o findAll(), e como parâmetro passamos em que ordem quero exibir os dados e condição para realizar tal tarefa que é o whre: { }.




