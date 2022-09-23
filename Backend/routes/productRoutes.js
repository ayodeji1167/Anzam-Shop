const router = require('express').Router();
const ProductModel = require('../models/ProductModel')

// @desc Fetch all Products
// @route GET/ /api/products
// @access Public Routes
router.get('/', async (req, res) => {
    const products = await ProductModel.find();

    res.json(products)
})


// @desc Fetch Single Products
// @route GET/ /api/products/:id
// @access Public Routes
router.get('/:id', async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
        res.json(product)
    }
    else {
        res.status(404).json({ message: 'Product Not Found' })
    }
})



module.exports = router;