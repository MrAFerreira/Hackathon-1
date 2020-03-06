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

router.get('/result/:id', (req, res, next) => {
  const resultId = req.params.id;
  let formResult;
  let sameGenderWage;
  let otherGenderWage;
  //console.log(resultId);
  User.findById(resultId)
    .then(user => {
      formResult = user;
      data.forEach(element => {
        if (
          element.Gender === formResult.Gender &&
          element['Age Group'] === formResult['Age Group'] &&
          element.Country === formResult.Country
        ) {
          sameGenderWage = element['Yearly Wage(EUR)'];
        } else if (
          element.Gender !== formResult.Gender &&
          element['Age Group'] === formResult['Age Group'] &&
          element.Country === formResult.Country
        ) {
          otherGenderWage = element['Yearly Wage(EUR)'];
        }
      });
      res.render('result', { sameGenderWage, otherGenderWage, formResult });
    })
    .catch(error => next(error));
});
module.exports = router;
