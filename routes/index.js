'use strict';

const { Router } = require('express');
const router = new Router();
const gap = require('./../gap_per_age.json')

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/info', (req, res, next) => {
  console.log(gap)
  res.render('info', { gap });
});

module.exports = router;
