# CRUD COM SEQUELIZE E MYSQL

projeto desenvolvido por mim durante os estudos da formação NodeJs do Guia do Programador - Victor Lima

### Installation

Requer o [Node.js](https://nodejs.org/) v12.13.0+ para executar.


Instale as dependências e devDependencies e inicie o servidor com npm start

```sh
$ npm install --save express
$ npm install --save sequelize
$ npm install --save mysql2
$ npm install --save ejs
$ npm install --save nodemon -D
```

### Desenvolvimento

CRUD COM SEQUELIZE E MYSQL



Um dos grandes desafios neste projeto foi utilizar a arquitetura MVC, Model e Controller para ser mais especifico. Neste padrão senti um pouco de dificuldade com importação e exportação de arquivos, mas no final, foi gratificante ver o resultado. O que chama atenção mesmo  é a linguagem simples do Sequelize para realizar as operações do CRUD.

 Para realizar as operações de INSERT, importei o model que possui a estrutura do Schema definido e apliquei o método CREATE( ), passando como parâmetro a variável que armazena o dado que é enviado pelo input do html, já para realizar a operação GET, utilizei o método findAll( ) e passei como parâmetro a ordem para ser exibidos de forma decrescente pegando como referência o id: "{ order: [['id', 'DESC']] }".

 O DELETE e UPDATE usa como parâmetro o id que é enviado do front e caso o dado seja igual ao do Schema, ele deleta ou atualiza a lista de itens.
 
 ![video](https://user-images.githubusercontent.com/57969262/95195453-eef90a80-07ac-11eb-9ab0-f40157d5cecd.gif)




