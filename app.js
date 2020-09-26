const express = require('express');
const app = express();
const connection = require("./database/db");
//const Test = require('./models/Test');

const TestController = require('./controller/TestController');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

connection.authenticate().then(() => {
  console.log("connected bank!!!");
}).catch(err => {
  console.log(err);
});


app.get('/', (req, res) => {
  res.render('index')
});

app.use("/", TestController);


app.listen(8080);