const Product = require('../models/Product'); // ya da ProductPart2

const getProductByBarcode = async (req, res) => {
  const { query } = req.body; // Tek parametre alıyoruz

  try {
    const product = await Product.findOne({
      $or: [
        { code: query },
        { product_name: query }
      ]
    });

    if (!product) {
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  }
};

module.exports = { getProductByBarcode };
