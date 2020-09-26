const express = require("express");
const router = express.Router();
const Test = require("../models/Test");

router.get('/list', (req, res) => {
  Test.findAll({ order: [['id', 'DESC']] }).then(names => {
    res.render('list', { names: names })
  })
});

//listar page list
router.get('/list/edit/:id', (req, res) => {
  const id = req.params.id;
  Test.findByPk(id).then( name => {
    res.render('edit', {name: name})
  })
});


//salvar
router.post('/save', (req, res) => {
  const name = req.body.name;
  Test.create({
    name
  }).then(() => {
    res.redirect('/list');
  })
});

//deletar
router.post("/list/delete", (req, res) => {
  const id = req.body.id;
  Test.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect("/list")
  })
})

//update
router.post("/list/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  Test.update({
    name
  },
  {
    where: {
      id
    }
  }
  ).then(() => {
    res.redirect("/list")
  }).catch( err => {
    res.redirect("/")
  })
});

module.exports = router;