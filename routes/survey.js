'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');
const data = require('./../Salaries_WD.json');
const gap = require('./../gap.json');

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
      res.redirect(`survey/result/${newUser._id}`);
    })
    .catch(error => next(error));
});

router.get('/result/:id', (req, res, next) => {
  const resultId = req.params.id;
  let formResult;
  let sameGenderWage;
  let otherGenderWage;
  let countryGap;
  let perceptionIsPositive = false;
  let absolutePerceptionValue;
  //console.log(resultId);
  User.findById(resultId)
    .then(user => {
      formResult = user;
      if (formResult.Perception > 0) {
        perceptionIsPositive = true;
      }
      absolutePerceptionValue = Math.abs(formResult.Perception);
      gap.forEach(element => {
        if (formResult.Country === element.country) {
          countryGap = element.gap;
        }
      });
      // console.log(countryGap);
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
      res.render('result', {
        sameGenderWage,
        otherGenderWage,
        formResult,
        countryGap,
        perceptionIsPositive,
        absolutePerceptionValue
      });
    })
    .catch(error => next(error));
});

//Updating user info with satisfaction

router.post('/result/:id', (req, res, next) => {
  const resultId = req.params.id;
  const satisfaction = req.body.smiley;

  User.findByIdAndUpdate(resultId, { Satisfaction: satisfaction })
    .then(() => {
      res.redirect('/');
    })
    .catch(error => next(error));
});

module.exports = router;
