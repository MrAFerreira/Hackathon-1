'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');

router.get('/', (req, res, next) => {
  res.render('survey');
});

router.post('/', (req, res, next) => {
  User.create()



  //res.redirect(`/result${._id}`, { info });
});

router.get('/result/:id', (req, res, next) => {
  const resultId = req.params.id;

  res.render('result');
});
module.exports = router;
