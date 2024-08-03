import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc    Fetch all product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({ 
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Samplecategory',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
        material: 'Sample material',
        width: 0,
        height: 0,
        length: 0,
        homeSpace: 'Sample home space',
        code: 'Sample code',
        style: 'Sample style',
     })

     const createdProduct = await product.save();
     res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name, 
        price,
        description,
        image,
        brand,
        category,
        countInStock,
        material,
        width,
        height,
        length,
        homeSpace,
        code,
        style,
     } = req.body;

     const product = await Product.findById(req.params.id);

     if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock  = countInStock;
        product.material = material;
        product.width = width;
        product.height = height;
        product.length = length;
        product.homeSpace = homeSpace;
        product.code = code;
        product.style = style;

        const updatedProduct = await product.save();
        res.json(updateProduct);
     } else {
        res.status(404);
        throw new Error('Resource not found');
     }

    res.json(products);
});

export { getProducts, getProductById, createProduct, updateProduct }