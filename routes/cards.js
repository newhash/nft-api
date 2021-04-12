const express = require('express');
const {
  getCard
} = require('../controllers/cards');

const Card = require('../models/Card');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');

router
  .route('/:id')
  .get(getCard);

module.exports = router;
