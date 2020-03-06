'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');
const data = require('./../Salaries_WD.json');

router.get('/', (req, res, next) => {
  res.render('survey');
});

router.post('/', (req, res, next) => {
  const { Gender, Country, Age, Wage, Sector, Education, Managerial, Perception } = req.body;
  console.log(req.body);

  User.create({
    Gender,
    Country,
    'Age Group': Age,
    'Yearly Wage(EUR)': Wage,
    Sector,
    Education,
    Role: Managerial,
    Perception
  })
    .then(newUser => {
      console.log(newUser);
      res.redirect(`/`);
    })
    .catch(error => next(error));
});

router.get('/result', (req, res, next) => {
  const resultId = req.params.id;
  let result;

  User.findById(resultId)
    .then(document => {
      result = document;
    })
    .catch(error => next(error));

  let specificComparison;

  data.forEach(element => {
    if (
      element.Gender === result.Gender &&
      element['Age Group'] === result['Age Group'] &&
      element.Country === result.Country
    ) {
      return (specificComparison = element['Yearly Wage(EUR)']);
    }
  });
  console.log(specificComparison);

  res.render('result');
});
module.exports = router;
