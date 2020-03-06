'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  Gender: {
    type: String,
    enum: ['Males', 'Females']
  },
  Country: {
    type: String,
    enum: [
      'Belgium',
      'Bulgaria',
      'Czechia',
      'Denmark',
      'Germany',
      'Estonia',
      'Ireland',
      'Greece',
      'Spain',
      'France',
      'Croatia',
      'Italy',
      'Cyprus',
      'Latvia',
      'Lithuania',
      'Luxembourg',
      'Hungary',
      'Malta',
      'Netherlands',
      'Austria',
      'Poland',
      'Portugal',
      'Romania',
      'Slovenia',
      'Slovakia',
      'Finland',
      'Sweden',
      'United Kingdom',
      'Iceland',
      'Norway',
      'Switzerland',
      'Montenegro',
      'North Macedonia',
      'Serbia',
      'Turkey'
    ]
  },
  'Age Group': {
    type: String,
    enum: [
      'Less than 18 years',
      'From 18 to 24 years',
      'From 25 to 49 years',
      'From 50 to 64 years',
      '65 years or over'
    ]
  },
  'Yearly Wage(EUR)': {
    type: Number
  },
  Sector: {
    type: String,
    enum: [
      'Agriculture, Forestry, Fishing & Hunting',
      'Mining, Quarrying, & Oil & Gas Extraction',
      'Utilities',
      'Construction',
      'Manufacturing',
      'Wholesale',
      'Retail',
      'Transportation & Warehousing',
      'Information',
      'Finance & Insurance',
      'Real Estate & Rental & Leasing',
      'Professional, Scientific & Technical Services',
      'Management of Companies & Enterprises',
      'Administrative, Support & Waste & Remediation',
      'Educational Services',
      'Health Care & Social Assistance',
      'Arts, Entertainment & Recreation',
      'Accommodation & Food Services',
      'Other Sector'
    ]
  },
  Education: {
    type: String,
    enum: [
      `High school or less`,
      `Bachelor's degree`,
      `Master’s degree`,
      `Doctorate Degree`,
      `Other`
    ]
  },
  Role: {
    type: String,
    enum: [
      "I don't manage a team",
      'I manage a team with 1 to 5 people',
      'I manage a team with 6 to 10 people',
      'I manage a team with more than 10 people'
    ]
  },
  Perception: {
    type: Number
  },
  Satisfaction: {
    type: Number
  }
});

module.exports = mongoose.model('User', schema);
