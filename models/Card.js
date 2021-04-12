const mongoose = require('mongoose');
const slugify = require('slugify');
// const geocoder = require('../utils/geocoder');

const CardSchema = new mongoose.Schema(
  {
    _id: Number,
    pool: { name: String, points: Number },
    external_url: String,
    image: String,
    name: String,
    description: String,
    attributes: [
      {
        display_type: String,
        trait_type: String,
        value: String
      }
    ]
  },
  {
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

module.exports = mongoose.model('Card', CardSchema);
