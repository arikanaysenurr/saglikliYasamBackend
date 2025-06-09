const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  product_name: String,
  brands: String,
  countries: String,
  ingredients_text: String,
  nutriscore_score: Number,
  energy_100g: Number,
});

module.exports = mongoose.model('ProductPart2', productSchema, 'products_part2');
