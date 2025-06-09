const express = require('express');
const router = express.Router();
const { getProductByBarcode } = require('../controllers/productController');

router.post('/lookup', getProductByBarcode);

module.exports = router;
