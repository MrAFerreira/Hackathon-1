'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');

router.get('/', (req, res, next) => {
  res.render('survey');
});

router.post('/', (req, res, next) => {
<<<<<<< HEAD
  const { Gender, Country, Age, Wage, Sector, Education, Role, Perception } = req.body;

  User.create({
    Gender,
    Country,
    Age,
    Wage,
    Sector,
    Education,
    Role,
    Perception
  })
    .then(newUser => {
      res.redirect(`/result/${newUser._id}`);
    })
    .catch(error => next(error));
=======
  User.create()



  //res.redirect(`/result${._id}`, { info });
>>>>>>> 6df213a4b2f27eefcd84f4eac3ef8ca11a301a38
});

router.get('/result/:id', (req, res, next) => {
  const resultId = req.params.id;

  res.render('result');
});
module.exports = router;
