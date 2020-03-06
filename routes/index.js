'use strict';

const { Router } = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/info', (req, res, next) => {
  res.render('info', { title: 'Hello World!' });
});

module.exports = router;
